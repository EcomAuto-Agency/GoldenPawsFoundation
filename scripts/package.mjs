// Packs the standalone build into one folder + zip for the Windows VPS.
// Usage: npm run build && npm run package
import { cpSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const web = path.resolve(import.meta.dirname, '..');
const out = path.resolve(web, '..', 'golden-paws-live');
const zip = out + '.zip';
const standalone = path.join(web, '.next', 'standalone');
if (!existsSync(path.join(standalone, 'server.js'))) throw new Error('Run "npm run build" first.');

rmSync(out, { recursive: true, force: true });
cpSync(standalone, out, { recursive: true });
cpSync(path.join(web, 'public'), path.join(out, 'public'), { recursive: true });
cpSync(path.join(web, '.next', 'static'), path.join(out, '.next', 'static'), { recursive: true });
rmSync(path.join(out, 'data'), { recursive: true, force: true }); // never ship local test submissions

writeFileSync(path.join(out, 'START.bat'), `@echo off
title Golden Paws website
cd /d "%~dp0"
set PORT=3000
set HOSTNAME=127.0.0.1
set NODE_ENV=production
echo Golden Paws website running on http://127.0.0.1:3000  (keep this window open)
node server.js
pause
`.replace(/\n/g, '\r\n'));

writeFileSync(path.join(out, 'Caddyfile'), `# Replace yourdomain.com with the real domain, then run caddy from this folder.
yourdomain.com, www.yourdomain.com {
    encode gzip
    reverse_proxy 127.0.0.1:3000
}
`.replace(/\n/g, '\r\n'));

// zip with forward-slash paths
rmSync(zip, { force: true });
execFileSync('powershell', ['-NoProfile', '-Command', `
Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem
$src = '${out}'; $z = [IO.Compression.ZipFile]::Open('${zip}', 'Create')
Get-ChildItem $src -Recurse -File -Force | ForEach-Object {
  $rel = $_.FullName.Substring($src.Length + 1).Replace('\\', '/')
  [void][IO.Compression.ZipFileExtensions]::CreateEntryFromFile($z, $_.FullName, $rel)
}
$z.Dispose()`], { stdio: 'inherit' });
console.log('✓', out, '\n✓', zip);
