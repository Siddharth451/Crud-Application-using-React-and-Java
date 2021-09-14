import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditUser = (props) => {
  let history = useHistory();
  const { id, index} = useParams();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });

  const { firstName, lastName, phoneNumber } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/${id}/${index}`, user);
    history.push("/"+id);
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/${id}/${index}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 style={{color:props.mode==='light'?'black':'yellow'}}className="text-center mb-4">Edit A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="firstName"
              value={firstName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="lastName"
              value={lastName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your PhoeNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={e => onInputChange(e)}
            />
          </div>
          
          
          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;