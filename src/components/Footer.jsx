import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒ Pavan Tirumalluri {year}</p>
    </footer>
  );
}

export default Footer;
