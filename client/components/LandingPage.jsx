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
     
    </div>
  </div>
</div>


 
<div class="section bg">
  <div class="container">
    <h1>Access to healthy food is a basic human right</h1>
    <h2>Pātaka helps redistribute access to healthy food</h2>
    <div class="col three bg nopad pointer">
      <div class="imgholder"></div>
      <h1 class="feature">Whakawhanaungatanga</h1>
      <p>Bringing communities together through the redistribution of kai</p>
    </div>
    <div class="col three bg nopad pointer">
      <div class="imgholder"></div>
      <h1 class="feature">Manaakitanga</h1>
      <p>Sharing is caring</p>
    </div>
    <div class="col three bg nopad pointer">
      <div class="imgholder"></div>
      <h1 class="feature">Kaitiakitanga</h1>
      <p>Reducing food waste and the impact this has on our climate</p>
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
