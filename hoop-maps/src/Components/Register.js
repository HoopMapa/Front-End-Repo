import '../Component-Styling/Register.css'
import React, { useState, useContext } from 'react'
import Context from "../Context/Context.js"
import Offline from "../Components/Offline.js"
import { Card, CardBody, Form, FormField, Box, Button, TextInput} from 'grommet';
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from 'firebase/auth';
import {auth} from '../firebase-config'
import { useNavigate } from 'react-router-dom';



export default function Register (props) {

    let navigate = useNavigate();
    const context = useContext(Context)

    
    

    const URL = "http://localhost:5004/users"
    
    const [registerEmail, setRegisterEmail] = React.useState("")
    const [registerPassword, setRegisterPassword] = React.useState("")
    const [registerUserName, setRegisterUserName] = React.useState("")
    const [registerFirstName, setRegisterFirstName] = React.useState("")
    const [registerLastName, setRegisterLastName] = React.useState("")
    const [registerPhone, setRegisterPhone] = React.useState("")
    const [registerBDay, setRegisterBDay] = React.useState("")
    

    //Create User to DB
    const createNewUser = async () => {
     
        const newUser = {
            username: registerUserName,
            password: registerPassword,
            email: registerEmail,
            firstName: registerFirstName,
            lastName: registerLastName,
            phonenumber: registerPhone,
           // birthday: registerBDay
       }
       
       try {
        const response = await fetch(
        URL,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify(newUser),
          }
        )
        console.log(response);
        console.log(context.user)
        
        //register(); //Call to firebase
      } catch (error) {
        console.log(error)
      } finally {
        {navigate('/login')} //clears existing user
      }
    }


    
//     //Create User to Firebase
//     const register = async () => {
//         try {
     
//         const user = await createUserWithEmailAndPassword(
//             auth, 
//             registerEmail, 
//             registerPassword
       
//         );
//         await updateProfile(auth.currentUser, { displayName: registerUserName }).catch(
//             (err) => console.log(err)
//           );
//        // createNewUser();
//         console.log(user);
//         {window.location.href="/login"};
           
//         } catch (error) {
//             console.log(error.message);
//             }
// } 



   

    const [value, setValue] = React.useState({}); 
    return (
    <Box>
    <Offline></Offline>
    <Card>
        <CardBody pad="medium">
            <h2>Register</h2>
            <br></br>
        <Form
        value={value}
        onChange={nextValue => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={({ value }) => {}}
        > 
            <FormField name="username" htmlFor="text-input-id" label="Username">
                <TextInput id="text-input-id" name="username"onChange={(event) => {
                    setRegisterUserName(event.target.value)
                }}/>
            </FormField>
            <FormField name="password" htmlFor="text-input-id" label="Password">
                <TextInput id="text-input-id" name="password" onChange={(event) => {
                    setRegisterPassword(event.target.value)
                }}/>
            </FormField>
            <FormField name="fname" htmlFor="text-input-id" label="First Name">
                <TextInput id="text-input-id" name="fname" onChange={(event) => {
                    setRegisterFirstName(event.target.value)
                }}/>
            </FormField>
            <FormField name="lname" htmlFor="text-input-id" label="Last Name">
                <TextInput id="text-input-id" name="lname" onChange={(event) => {
                    setRegisterLastName(event.target.value)
                }}/>
            </FormField>
            <FormField name="birthday" htmlFor="text-input-id" label="Birthday">
                <TextInput id="text-input-id" name="birthday" onChange={(event) => {
                    setRegisterBDay(event.target.value)
                }}/>
            </FormField>
            <FormField name="phone" htmlFor="text-input-id" label="Phone Number">
                <TextInput id="text-input-id" name="phone" onChange={(event) => {
                    setRegisterPhone(event.target.value)
                }}/>
            </FormField>
            <FormField name="email" htmlFor="text-input-id" label="Email">
                <TextInput id="text-input-id" name="email" onChange={(event) => {
                    setRegisterEmail(event.target.value)
                }}/>
        </FormField>
            <Box direction="row" gap="medium">
            <Button primary type="submit" label="Create Account" background color='hoops' onClick={createNewUser}/>
            <Button primary type="reset" label="Clear" background color='hoops'/>
            </Box>
        </Form>
    </CardBody>
</Card>
</Box>
)};