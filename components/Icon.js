// <svg> that points at a symbol in the shared sprite (components/Sprite.js)
export default function Icon({ id, ...props }) {
  return (
    <svg {...props}>
      <use href={`#${id}`} />
    </svg>
  );
}
