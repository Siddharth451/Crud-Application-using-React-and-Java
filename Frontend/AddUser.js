import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Alert from "./Alert";
const AddUser = (props) => {
  const { id } = useParams();
  let history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",  
  });

  const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            message: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    }
  const { firstName, lastName, phoneNumber, } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  <Alert alert={alert}/>

  const onSubmit = async e => {
    e.preventDefault();
    console.log(user)
    await axios.post(`http://localhost:8080/${id}`, user).then((response)=>{
      history.push("/"+id);
    })
    showAlert("User Added successfully", "success");
  };
  return (
    <>
    <div className="container my-4" >
      <div className="w-75 mx-auto shadow p-5"  style={{color:props.mode==='light'?'black':'white'}}>
        <h2  style={{color:props.mode==='light'?'black':'yellow'}}className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your FirstName"
              name="firstName"
              value={firstName}
              required
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Lastname"
              name="lastName"
              value={lastName}
              required
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phoneNumber"
              value={phoneNumber}
              required
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddUser;