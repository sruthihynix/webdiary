import Header from "./components/Header";
import React, { useState } from "react";

import Footer from "./components/Footer";
import Base from "./components/Base";
import Card from "./components/Card";
import "./App.css";
import cardData from "./components/CardData"; // (an array of objects) that contains information you want to display in the Card components.

// functional component
function MyApp() {

  let [favImages, setFavImages] = useState([]);
  // console.log("favimagess---", favImages);

  //get all fav images- fun defined
  function getFavImages(imageSrc) {
    // console.log("fav images places");
    // console.log("user fav images places", imageSrc);
    // setFavImages((favImages = imageSrc));
    setFavImages([...favImages, imageSrc]); //spread operator
  }
  // console.log(favImages);
  // console.log("Favourite images:" + favImages);
  
  // lets map each  favouritr images
  let userFavImages= favImages.map((imageSrc)=>{
    return(
      <img  src= {imageSrc}  className="favorite-image"/>
    )

    })
  

  // creating card components dynamically from cardData.jsx using map fun
  let cardInfo = cardData.map((cardItem) => {
    return (
      <Card
        cardComponent={{
          imageSrc: cardItem.imageSrc,
          place: cardItem.place,
          rating: cardItem.rating,
          district: cardItem.district,
        }}
        getFavImages={
          //fun name and prop name same
          getFavImages
        }
      />
    );
  });
  // Rendering the App Structure
  return (
    <div>
      <Header />
      <Base />
      <div className="card-container container">
        <h2>Destination</h2>
        <div className="Container-flex">
          <div className="card-flex">
            {cardInfo} {/* to show variable cardInfo */}
          </div>

          <aside>
            <h2>Favorites</h2>
            {/* {favImages}  */} {/* show image link */}
            {/* <img src={favImages}></img> */} {/* show 1 image  */}
            {userFavImages}
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default MyApp;
