import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){

return(
      <nav class="navbar navbar-expand-lg bg-dark"  >
  
  <div class="container-fluid">
    <Link to="/" className='navbar-brand' style={{color:"white"}} >My Site Template</Link>

    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" className='nav-link active' style={{color:"white"}} >Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/about" className='nav-link active' style={{color:"white"}} >About Us</Link>
        </li>
        <li class="nav-item">
          <Link to="/contact" className='nav-link active' style={{color:"white"}} >Contact Us</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>


  )

}

export default Navbar;