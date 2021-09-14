import React,{useState, useEffect} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Home(props) {
  const { id,index} = useParams();
    const[users,setUser]=useState([]);
    useEffect(() => {
        loadUsers();
      }, []);
    
      const loadUsers = async () => {
       await axios.get(`http://localhost:8080/${id}`).then((response)=>{
            console.log(response.data.userData);
           
            setUser(
            response.data.userData
            );
        })
      };
    
      const deleteUser = async(id,index) => {
        await axios.delete(`http://localhost:8080/${id}/${index}`);
        loadUsers();
      };

    return (
        <>
        <Link class="btn btn-primary mr-2 mx-2" to={`/add/${id}`}>
                    Adduser
                  </Link>
                  <Link class="btn btn-primary mr-2 mx-2" to="/">
                    Logout
                  </Link>
                  <br/>
                 
        <div className="container my-4">
       
        <table class="table border shadow">
          <thead class={`thead-${props.mode}`}>
            <tr>
              <th style={{color:props.mode==='light'?'black':'white'}}scope="col">#</th>
              <th style={{color:props.mode==='light'?'black':'white'}} scope="col">First Name</th>
              <th style={{color:props.mode==='light'?'black':'white'}}scope="col">Last Name</th>
              <th style={{color:props.mode==='light'?'black':'white'}}scope="col">Phone Number</th>
              <th style={{color:props.mode==='light'?'black':'white'}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users&&users.map((user, index) => (
              <tr>
                <th style={{color:props.mode==='light'?'black':'white'}}scope="row">{index + 1}</th>
                <td style={{color:props.mode==='light'?'black':'white'}}>{user.firstName}</td>
                <td style={{color:props.mode==='light'?'black':'white'}}>{user.lastName}</td>
                <td style={{color:props.mode==='light'?'black':'white'}}>{user.phoneNumber}</td>
                <td>
                    <Link class="btn btn-primary mr-2" to={`/view/${id}/${index}`}>
                      View
                    </Link>
                  <Link
                    class="btn btn-primary mr-2 mx-2"
                    to={`/edit/${id}/${index}`}
                  >
                    Edit
                  </Link>
                  
                  <Link
                    class="btn btn-danger mr-2 mx-2"
                    to={`/delete/${id}/${index}`}
                  >
                    Delete
                  </Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        </>
    )
}
