export default function MenuElement({ menuElement }) {
  const { name, photoName, ingredients } = menuElement;

  return (
    <div className="menu__element">
      <img src={process.env.PUBLIC_URL + "/img/" + photoName} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
    </div>
  );
}
