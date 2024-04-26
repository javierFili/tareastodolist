import "./navbar.css";
import ButtonNavBar from "../buttonNavBar/ButtonNavBar";
import { useState } from "react";
import SelectorMonth from "../selectorMonth/SelectorMonth";

function NavBar() {
  let timeNow = new Date();
  const [month, setMonth] = useState(timeNow.getMonth());
  const [year, setYear] = useState(timeNow.getFullYear());

  return (
    <div>
      <nav className="navBarApp">
        <section className="navBarApp1">
          <ButtonNavBar textoShow="Crear tarea" />
        </section>
        <section className="navBarApp2">
          <p className="navBarTitle">
            Calendario {month} {year}
          </p>
        </section>
        <section className="navBarApp3">
          <SelectorMonth month={month} />
        </section>
      </nav>
    </div>
  );
}

export default NavBar;
