import React from 'react'
import { Link } from 'react-router-dom';
export default function FrontPage(props) {
    return (

        <div class="container">
            <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div class="col-md-8 px-0">
                    <h1 style={{color:props.mode==='light'?'white':'yellow'}}class="fst-italic">Single Page CRUD Application</h1>
                    <p style={{color:props.mode==='light'?'white':'yellow'}}class="lead my-3"></p>
                  
                </div>
            </div>

            <div class="row mb-2">
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                           
                            <h3 style={{color:props.mode==='light'?'black':'yellow'}}class="mb-0">Registration</h3>
                            
                            <p style={{color:props.mode==='light'?'black':'yellow'}}class="card-text mb-auto">Register Today and start using our most amazing application to maintain your client records</p>
                            <Link to="/register" class="stretched-link">Register</Link>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <svg class="bd-placeholder-img" width="200" height="250" xmlns="/ss4.jpg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="40%" y="50%" fill="#eceeef" dy=".3em">Register</text></svg>

                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column position-static">
                          
                            <h3 style={{color:props.mode==='light'?'black':'yellow'}}class="mb-0">User Login</h3>
                           <p style={{color:props.mode==='light'?'black':'yellow'}}class="card-text mb-auto">OOh great already registered just login with two steps</p>
                            <Link  to="/login" class="stretched-link">Login</Link>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="40%" y="50%" fill="#eceeef" dy=".3em">Login</text></svg>

                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4"></div>
                      <div class="col-sm-6">  <h1 style={{color:props.mode==='light'?'black':'yellow'}}>Our Features</h1>
                    </div>
                    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
    <img src="/ss1.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 style={{color:props.mode==='light'?'black':'red'}} class="card-title">Personal Dashboard</h5>
        <p  style={{color:props.mode==='light'?'black':'red'}}class="card-text">Our Application Provides a personal dashboard for each user where he or she can maintain records.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/ss2.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 style={{color:props.mode==='light'?'black':'red'}} class="card-title">Performing Operations</h5>
        <p style={{color:props.mode==='light'?'black':'red'}} class="card-text">One example of user is adding details of client. With this he/she also has feature to update,view and permantely delete.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="ss3.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 style={{color:props.mode==='light'?'black':'red'}} class="card-title">Dark Mode</h5>
        <p style={{color:props.mode==='light'?'black':'red'}} class="card-text">We also provide feature of dark mode in our application.Users can select mode of there preference in which they are comfortable. </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="/ss4.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 style={{color:props.mode==='light'?'black':'red'}} class="card-title">Powerful Login</h5>
        <p style={{color:props.mode==='light'?'black':'red'}} class="card-text">Security is our priority</p>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
            <br/>
            <h1 style={{color:props.mode==='light'?'black':'yellow'}}>Get started</h1>
    <p style={{color:props.mode==='light'?'black':'yellow'}} class="fs-5 col-md-8">Quickly and easily get started with Single Page CRUD Application.............And enjoy </p>

    <div class="mb-5">
      <Link to="/register" class="btn btn-primary btn-lg px-4">Register</Link>
    </div>
    <footer class="pt-5 my-5 text-muted border-top" >
    Created by #sid 2021
  </footer>
      </div>
            )
}
