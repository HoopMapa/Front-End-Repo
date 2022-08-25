import '../Component-Styling/Login.css'
import React, { UseState, useContext, useEffect } from 'react'
import { Card, CardBody, Form, FormField, Box, Button, TextInput} from 'grommet';
//import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
//import { auth } from '../firebase-config';
import Context from "../Context/Context.js"
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Offline from './Offline';



   
export default function Login(){ 
//var displayName = null;
let navigate = useNavigate();
    const context = useContext(Context)

    const [value, setValue] = React.useState({}); 
    //const [loginEmail, setLoginEmail] = React.useState("")
   // const [loginPassword, setLoginPassword] = React.useState("")
    //const [user, setUser] = React.useState({user});

    
    const login = async (e) => {
        e.preventDefault();
        //displayName = e.target.email.value;

        setValue({
            password: e.target.password.value,
            email: e.target.email.value                     
        })
    }

    const loginRequest = async () => {
        const URL = "http://localhost:5004/login"
        
        const response = await fetch(
        URL,
            {
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                method: 'post',
                body: JSON.stringify(value),
              }
            )
            const data = await response.json();
            return data;
            
      
           // console.log(data);
            

    }
    //UseEffect (whenever page loads)
    useEffect(() => {
        loginRequest().then(data => {
            context.setUser(data);
            console.log(context.user);
            if (data.length != 0) {navigate('/profile');}
        })
            

    }, [value]) //No dependency: continously run. 
    //Dependency array: will only run one of the values in the array changes
    console.log(context.user)
    
          
    

  


    
    // //Grab user from Firebase, login onAuthStateChanged, update userState
    //   const login = async () => {
    //     try {
    //     const user = await signInWithEmailAndPassword(
    //     auth, 
    //     loginEmail, 
    //     loginPassword,
    //     );
    //       console.log(user);
    //       {window.location.href="/profile"}
          
      
    //      } catch (error) {
    //   console.log(error.message);
    //      }
    //  }





    return (  
    <Box>
        <Offline></Offline>
    <Card>
        

        <CardBody pad="medium">
            <h2>Login</h2>
            <br></br>
        <Form
        value={value}
        //onChange={nextValue => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={login}
        > 
            <FormField name="email" htmlFor="text-input-id" label="Email">
                <TextInput id="text-input-id" name="email"  
                    />
            </FormField>
            <FormField name="password" htmlFor="text-input-id" label="Password">
                <TextInput id="text-input-id" name="password"   
                  />
            </FormField>
            <Box direction="row" gap="medium">
                <Button type="submit" primary label="Login" background color='hoops'/>
                <Button type="reset" primary label="Clear" background color='hoops'/>
            </Box>
        </Form>
        </CardBody>
       
    </Card>
    </Box>
   
    
)};
    
