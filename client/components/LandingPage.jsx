import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage () {

    return (
<div className="homemaindiv">

 
<div class="section">
  <div class="slider">
    <div class="container slidercontent">
      <h1 class="hometitle">Nau mai haere mai, ki a Pātaka kai! </h1>
      <h2 class="hero">Welcome to the local food pantry</h2>

   

      <div className='buttonscontainer'>

        <Link to="/AddListing"><button className='gotfood'>
              Got food?
        </button>
        </Link>

        <Link to="/Listings"><button className='needfood'>
              Need food?
        </button>
        </Link>

      </div>

    </div>
  </div>
</div>


 
<div class="section bg">
  <div class="container">
    
    <div class="col three bg nopad pointer">
      <div class="imgholder">
      <img class="imgholder" src="community.jpg"/>
      </div>
      <h1 class="feature">Pātaka is bringing communities together through the redistribution of kai</h1>
      <p></p>
    </div>


    <div class="col three bg nopad pointer">
    <div class="imgholder">
      <img class="imgholder" src="tomatoes.jpg"/>
      </div>
      <h1 class="feature">There is enough food in the world to feed every single fucking person</h1>
      <p></p>
    </div>


    <div class="col three bg nopad pointer">
    <div class="imgholder">
      <img class="imgholder" src="food-waste.jpg"/>
     
        
      </div>
      <h1 class="feature">Reducing food waste and the impact this has on our climate</h1>
      <p></p>
    </div>
    </div>
    </div>



    {/* <h1>Nau mai, haere mai ki a Pātaka!</h1>
    <div className='homecontainer'></div>
    <div className='homevalues'>
        <p>Main home value greeting</p>
      </div>
      <div className='homefacts'>
        <div className='fact1'>There is enough food produced in the world to feed every living human.</div>
        <div className='fact2'>New Zealand households throw away 157,389 tonnes of food a year. </div>
        <div className='fact3'>We throw away 29 million loaves of bread a year! Nearly one-third of the food we waste is vegetables.</div>
    </div> */}
<h1>Naku te rourou nau te rourou ka ora ai te iwi</h1>
    <h2>With your basket and my basket the people will live</h2>


         







    <div class="footer">
<div class="container white">
  <div class="col four left">
    <h1>What?</h1>
    <p>Food always tastes better when you share it with someone - Josh

Connecting communities (whanaungitanga) through tackling food inequality
Reducing waste/environmental impact of wasted food (Kaitiakitanga) - Luke </p>
  </div>
  <div class="col four left">
    <h1>How?</h1>
    <p></p>
  </div>
  <div class="col four left">
   
    
   
  </div>
  <div class="col four left">
    <h1>Who?</h1>

    
 
  </div>


  <div class="col four left">
        <h1>Wtf?</h1>
   
      </div>


  <div class="group"></div>
</div>
</div>

</div>





      )
}

export default LandingPage
