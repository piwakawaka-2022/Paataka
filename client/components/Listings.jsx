import React from "react";

import FoodItems from './FoodItems'

function Listings () {


  return(

    <>
      <div>
        <h1>Available food in your region</h1>
      </div>
      <div>
        {/* The div here will be the section with the images and detail buttons, a map function */}
        <FoodItems />
      </div>
    </>

  )

}

export default Listings