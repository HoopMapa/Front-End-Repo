import '../Component-Styling/Login.css'
import React, { UseState } from 'react'
import { Card, CardBody, Form, FormField, Box, Button, TextInput} from 'grommet';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

   
export default function Login(){ 

    const [value, setValue] = React.useState({}); 
    const [loginEmail, setLoginEmail] = React.useState("")
    const [loginPassword, setLoginPassword] = React.useState("")

        
   
    

      const login = async () => {
        try {
        const user = await signInWithEmailAndPassword(
        auth, 
        loginEmail, 
        loginPassword
        );
          console.log(user);
          {window.location.href="/profile"}
          
      
         } catch (error) {
      console.log(error.message);
         }
     }



    return (  
    <Card>
        <CardBody pad="medium">
            <h2>Login</h2>
            <br></br>
        <Form
        value={value}
        onChange={nextValue => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={({ value }) => {}}
        > 
            <FormField name="email" htmlFor="text-input-id" label="Email">
                <TextInput id="text-input-id" name="email" onChange={(event) => {
                    setLoginEmail(event.target.value)
                }}/>
            </FormField>
            <FormField name="password" htmlFor="text-input-id" label="Password">
                <TextInput id="text-input-id" name="lname" onChange={(event) => {
                    setLoginPassword(event.target.value)
                }}/>
            </FormField>
            <Box direction="row" gap="medium">
                <Button type="submit" primary label="Login" background color='hoops' onClick={login} />
                <Button type="reset" primary label="Clear" background color='hoops'/>
            </Box>
        </Form>
        </CardBody>
       
    </Card>
   
    
)};

