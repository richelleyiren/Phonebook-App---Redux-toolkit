import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../style.css'
import {  useSelector,useDispatch } from "react-redux";
import {getContacts, updateContacts, deleteContact } from "../redux-slices/ContactSlice";

export default function Contacts() {
  const [haha, setHaha] = useState('');

  const dispatch = useDispatch();

  // useEffect(()=>{
  //   fetch("http://localhost:4000/get-contacts")
  //   .then(res => res.json())
  //   .then(data => setData(data))
  //   // console.log(data)
  // },[])
  // const allContacts = useSelector((state) => state.phonebook.contactList);
  const allContacts = useSelector((state) => state.contacts.contactList);

 
  console.log("this is all contacts", allContacts);

 
   const delContact = (id) => {
     dispatch(deleteContact(id))

   }

   const updContactss = async (id) => {
     dispatch(updateContacts(id));
   };


    useEffect(() => {
      dispatch(getContacts());
    }, [dispatch]);

  return (
    <>
      <h1> My Phonebook </h1>
      <div className="main-flex">
        
        {allContacts.map((item,key) => (
          <div key={key} className="phone-card">
            <h4> Name: {item.name} </h4> <hr></hr>
            <h4> Number: {item.number} </h4> <hr></hr>
            <div className="buttoms">
              {/* {item.favorite === false ?  <button className="edit edits"  >  Add to Favorites</button> :  <button className="edit edits"  > Favorite</button>    }  */}

              <button
                className="edit edits"
                onClick={() => updContactss(item.id)}
              >
                {item.favorite === false ? "Add to Favorites " : "Favorite"}
              </button>
              <button className="delete" onClick={() => delContact(item.id)}>
                {" "}
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


  // <div className="display-container">
  //   <div className="display-inside">
  //     {data.map((item) => (
  //       <div key={item.id} className="contact-card">
  //         <div className="contents">
  //           <h3> {item.name}</h3> <hr></hr>
  //           <h3>{item.number}</h3> <hr></hr>
  //           <div className="buttons">
  //             <Link to="/edit" className="edit edits">
  //               Edit
  //             </Link>
  //             <button className="delete"> Delete</button>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // </div>;

   // setData(allContacts)

  // const deleteCont = async(id)=>{
  //    try{
  //      const remove = await axios.delete(`/delete/${id}`);
  //    }  catch(error){
  //      console.log(error)
  //    }

  // }

  // const updateCont = async (id) => {
  //    fetch(`http://localhost:4000/favotite/${id}`)
  //      .then((res) => res.json())
  //      .then((data) => setData(data));
  //      console.log(data)

  //      if(data.favorite){
  //        console.log('there')
  //      }

  // }

  // const updateCont = async()=>{

  //   try{
  //     const upd = await (await fetch("http://localhost:4000/get-contacts")).json()
  //     const data = await upd.data

  //     if(data.favorite){
  //       return {...data, favorite:!data.favorite}
  //     }else{
  //       console.log("not working")
  //     }

  //   }catch(error){
  //     console.log(error)
  //   }
  // }