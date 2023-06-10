export default function MenuElement({ menuElement }) {
  const { name, photoName, ingredients, price, soldOut } = menuElement;

  return (
    <li className={`menu__element ${soldOut ? "sold-out" : ""}`}>
      <img src={process.env.PUBLIC_URL + "/img/" + photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}
