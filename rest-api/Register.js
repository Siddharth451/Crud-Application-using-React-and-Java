import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function Register(props) {
  let history = useHistory();

  const [text, setText] = useState({
    email:"",
    password:"",
  });

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  const { email,password } = text;
  const onInputChange = e => {
    setText({ ...text, [e.target.name]: e.target.value });
  };
  function handleSubmit(event) {
    event.preventDefault();
   axios.post("http://localhost:8080/register", text).then((response)=>{
    history.push("/"+response.data);
   });
   history.push("/");
  }
  return (
    
    <div className=" container text-center">
       <form onSubmit={handleSubmit}>
  
    <h1 style={{color:props.mode==='light'?'black':'yellow'}}class="h3 mb-3 fw-normal">Register</h1>

    
    <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your email"
              name="email"
              value={text.email}
              required
              onChange={(e)=>onInputChange(e)}
            />
    
    
    <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter Your password"
              name="password"
              value={text.password}
              required
              onChange={(e) => onInputChange(e)}
            />
    

    <button class="w-100 btn btn-lg btn-primary" type="submit" disabled={!validateForm()}>Sign in</button>
    <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
  </form>
    </div>
  )
}
