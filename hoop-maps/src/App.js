//import logo from './logo.svg';
//import './App.css';
import React, { useState } from "react";
import { Grommet } from 'grommet';
import Landing from './Components/Landing';
import Header from './Components/Header';
import Register from './Components/Register';
import Explore from './Components/Explore';
import Login from './Components/Login';
import Profile from './Components/Profile';
import {Routes, Route } from 'react-router-dom'
import { auth } from './firebase-config';
import { onAuthStateChanged } from 'firebase/auth';



 function App() {
  const [user, setUser] = React.useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    console.log(currentUser.email)
  });


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
      <Header>
     </Header>
      
        <Routes>
         <Route path="/" element={<Landing />}/>
         <Route path="/register" element={<Register />}/>
         <Route path="/login" element={<Login />}/>
         <Route path="/explore" element={<Explore />}/>
         <Route path="/profile" element={<Profile />}/>
        </Routes>
</Grommet>
   
   );
 }


export default App;