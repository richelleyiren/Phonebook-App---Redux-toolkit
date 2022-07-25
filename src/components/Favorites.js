import React, { useState, useEffect } from "react";

export default function Favorites() {

   const [data, setData] = useState([]);
    useEffect(() => {
      fetch("http://localhost:4000/get-contacts")
        .then((res) => res.json())
        .then((data) => setData(data));
      console.log(data);



    }, []);

//           let favs =[]

//           const farvs = ()=>{
//               data.map((item) => {
//                 if (item.favorite === true) {
//                   favs.push(item);
//                 } else {
//                   console.log("error");
//                 }
//               });

              
//           }
  
// console.log("this is", favs);
    

    return (
      <div>
      
           
         
       
      </div>
    );
}
