// Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="Navbar">
      <ul className="linkStyle">
        <li>
          <Link to="/">Startsida</Link>
        </li>
        <li>
          <Link to="/pets">Kolla på djuren</Link>
        </li>
        <li>
          <Link to="/shop">Köpa djur</Link>
        </li>
        {/* <li>
          <Link to="/petlist">Testkod-länk</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
