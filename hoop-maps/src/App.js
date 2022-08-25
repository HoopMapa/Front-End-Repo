//import logo from './logo.svg';
//import './App.css';
import React, { useState } from "react";
import { Grommet } from 'grommet';
import Landing from './Components/Landing';
import Header from './Components/Header';
import Offline from './Components/Offline';
import Register from './Components/Register';
import Explore from './Components/Explore';
import Login from './Components/Login';
import Profile from './Components/Profile';
import {Routes, Route } from 'react-router-dom'
//import { auth } from './firebase-config';
//import { onAuthStateChanged } from 'firebase/auth';



 function App() {
//logic to fetch dislay user from SQL after email matches in firebase
  
// const [user, setUser] = React.useState({});
// const [userID, setUserID] = React.useState();

// //Update UserID state --- grab User ID from our database based on firebase email
//  onAuthStateChanged(auth, (currentUser) => {
//   setUser(currentUser);
//   if (currentUser!= null) {
   
//     console.log(currentUser.email); 
//      console.log(user);
//       fetch(`http://localhost:5004/users/email/${currentUser.email}`) 
//          .then((response) => response.json()) 
//          .then((data) => {
//           console.log(data.data[0].id); 
//           const ID = data.data[0].id;
//           setUserID(ID);
//      })
//      console.log(userID)
//   }
       
// })


   return (
    <Grommet theme= {{ global: { 
      font: {
        family: 'Roboto',
        size: '20px',
        height: '20px',
      },
      colors: { 
        hoops: '#000000',
        text: {
          light: '#F28500',
          dark: '#F28500',
        },
        } 
      }
    }}>
        <Routes>
         <Route path="/" element={<Landing />}/>
         <Route path="/register" element={<Register />}/>
         <Route path="/login" element={<Login />} />
         <Route path="/explore" element={<Explore />} />
         <Route path="/profile" element={<Profile />} />
        </Routes>
</Grommet>
   
   );
 }


export default App;