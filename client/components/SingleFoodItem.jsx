import React from "react";

function SingleFoodItem (props) {
  //state?
  // will be accessing info from the db

  const { name, category, image } = props. //this needs updating

  return (
    <>
      <p> {name} </p>
      <p> {category} </p>
      <img src={image} />
      {/* setup a redirection here to lead to the food items detail page */}
      <button>DETAILS</button>
    </>
  )

}

export default SingleFoodItem