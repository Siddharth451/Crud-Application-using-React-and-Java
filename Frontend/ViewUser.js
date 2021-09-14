import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
   
  });
  const { id,index } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    console.log(id);
     await axios.get(`http://localhost:8080/${id}/${index}`).then((response)=>{
       console.log(response)
      setUser(response.data);
    })
  
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to={`/${id}`}>
        back to Home
      </Link>
      
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">First Name: {user.firstName}</li>
        <li className="list-group-item">Last Name: {user.lastName}</li>
        <li className="list-group-item">Phone Number: {user.phoneNumber}</li>
       
      </ul>
    </div>
  );
};
export default ViewUser;