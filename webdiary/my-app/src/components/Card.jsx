import React, { useState } from "react";
import heart from "../assets/heart.svg";

function Card(props) {
  // console.log("Props are:",props.getFavImages);

  let favorites = useState("Add to Favorite"); // this will return an array
  // console.log(favorites[0]);
  let activeClass = useState("");
  //destructure
  let [btnstate, setbtntState] = favorites;

  let [clsState, setClsState] = activeClass;

  //lets change/ modify the state
  function addToFavorites(imageSrc) {
    // console.log("fav image" + imageSrc);

    setbtntState((preState) => {
      if (preState === "Add to Favorite") {
        props.getFavImages(imageSrc);
        // getFavImages(imageSrc); //fun

        return "Added to Favorite";
      } else {
        return " Add to Favorite";
      }
    });

    setClsState((prevCls) => {
      if (prevCls === "") {
        return "active";
      } else {
        return "";
      }
    });
  }

  function getFavImages() {}

  return (
    <div className={`card ${clsState}`}>
      <img src={heart} className="icon" />

      <img src={props.cardComponent.imageSrc} alt="" />
      <h3>{props.cardComponent.place}</h3>
      <p>{props.cardComponent.rating}</p>
      <p>{props.cardComponent.district}</p>

      <button
        onClick={() => {
          addToFavorites(props.cardComponent.imageSrc);
        }}
      >
        {btnstate}
      </button>
    </div>
  );
}

export default Card;
