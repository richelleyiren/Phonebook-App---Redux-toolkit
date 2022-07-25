import React, { useState } from "react";
import axios from "axios";
import { useNavigate,  } from "react-router-dom";
import { addContact,  addContactss,deleteContact } from "../redux-slices/ContactSlice";
import { useDispatch} from "react-redux";

export default function New() {

    const dispatch = useDispatch();
    

    // dispatch(addContact("help"))

    // dispatch(deleteContact())

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
   const [dets, setDets] = useState("");

 

  const addContactt = async (e) => {
        e.preventDefault();
        dispatch(addContactss({name,number}))
         
        if(name && number){
          alert("contact added")
        } else{
          alert('please enter name')
        }

        setName("");
        setNumber("");

    // try {
    //   e.preventDefault()
    //     if(name ===''){
    //       alert('please enter name')
    //     } else if(number === ''){
    //       alert('please enter number')
    //     }else if ( name && number){
    //       const add = await axios.post("/add-contact",{
    //        cName:name,
    //        cNumber:number
    //       });

         

           
          

    //     }else{
    //       console.log('erorr')
    //     }

      
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="card-container">
      <div className="main-card">
        <h2> Add New Contact</h2>

        <form className=" form" >
          <div className="form form-one">
            <label> Contact Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="Name"
              placeholder=" Enter Name"
            ></input>
          </div>

          <div className="form form-two">
            <label> Contact Number</label>
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              name="Number"
              placeholder="Enter Number"
            ></input>
          </div>
          <button type="submit" onClick={addContactt} > Add Contact </button>
        </form>
      </div>
    </div>
  );
}
