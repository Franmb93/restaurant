import { useEffect, useState } from "react";
import MenuElement from "./MenuElement";

export default function Menu() {
  const [menuElements, setMenuElements] = useState([]);

  const getMenuElements = async () => {
    const response = await fetch(process.env.PUBLIC_URL + "/data.json");
    const data = await response.json();

    setMenuElements(data);
  };

  useEffect(() => {
    getMenuElements();
  }, []);

  return (
    <div className="menu">
      <h2>Our menu </h2>
      <div className="menu__elements">
        {menuElements.map((menuElement) => (
          <MenuElement key={menuElement.id} menuElement={menuElement} />
        ))}
      </div>
    </div>
  );
}
