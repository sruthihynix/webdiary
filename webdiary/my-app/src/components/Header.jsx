import React from "react";

function Header() {
  let time = new Date();
  let hours = time.getHours();

  let mode = "";

  // Set backgroundColor based on the time
  // adding class using condition -style-

  if (hours > 18) {
    mode = "nightmode";
  } else if (hours < 18) {
    mode = "daymode";
  }

  return (
    <header className={`display_flex  ${mode}`}>
      {" "}
      {/* // display_flex and mode class together */}
      <div className="logo">Logo</div>
      <ul className="nav display_flex">
        <li>
          <a href="home"> home</a>
          </li>
        <li>
          <a href="about"> about</a>
        </li>
        <li>
          <a href="contact"> contact</a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
