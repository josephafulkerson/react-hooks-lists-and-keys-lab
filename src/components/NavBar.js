import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const renderLinks = links.map(l => <a href={l} key={l}>{l}</a>)
  return (
      <nav>
        {renderLinks}
      </nav>)
}

export default NavBar;
