import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";
export default function Navbar(props) {
 // const { id } = useParams();
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/contact">Contact us</Link>
        </li>
       
      </ul>
  

                  <form class="d-flex">
              <div class={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                <label class="form-check-label" for="flexSwitchCheckDefault">Enable to {props.mode==='light'?'dark':'light'} mode</label>
              </div>
              </form>
    </div>
  </div>
</nav>
    </div>
  )
}
