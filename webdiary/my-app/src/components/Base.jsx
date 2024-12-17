import React from "react";

function Base() {
  let msg1 = "Welcome to ...";
  let msg2 = "Kerala";

  let style1 = {
    color: "white",
    backgroundColor: "black",
    fontSize: 30,
  };

  return (
    <div className="base">
      <h3 style={style1}>{`${msg1} ${msg2}`}</h3>
    </div>
    // </div>
  );
}
export default Base;
