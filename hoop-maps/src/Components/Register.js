import '../Component-Styling/Register.css'
import React, { UseState } from 'react'
import { Card, CardBody, Form, FormField, Box, Button, TextInput} from 'grommet';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from 'firebase/auth';
import {auth} from '../firebase-config'
export {Register}


export default function Register(){ 
    
  
    const [registerEmail, setRegisterEmail] = React.useState("")
    const [registerPassword, setRegisterPassword] = React.useState("")
    

    const register = async () => {
        try {
        const user = await createUserWithEmailAndPassword(
            auth, 
            registerEmail, 
            registerPassword
        );
        console.log(user);
        {window.location.href="/login"};
        
        } catch (error) {
        console.log(error.message);
        }
    }


   

    const [value, setValue] = React.useState({}); 
    return (
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
                <TextInput id="text-input-id" name="username" />
            </FormField>
            <FormField name="password" htmlFor="text-input-id" label="Password">
                <TextInput id="text-input-id" name="password" onChange={(event) => {
                    setRegisterPassword(event.target.value)
                }}/>
            </FormField>
            <FormField name="fname" htmlFor="text-input-id" label="First Name">
                <TextInput id="text-input-id" name="fname" />
            </FormField>
            <FormField name="lname" htmlFor="text-input-id" label="Last Name">
                <TextInput id="text-input-id" name="lname" />
            </FormField>
            <FormField name="birthday" htmlFor="text-input-id" label="Birthday">
                <TextInput id="text-input-id" name="birthday" />
            </FormField>
            <FormField name="phone" htmlFor="text-input-id" label="Phone Number">
                <TextInput id="text-input-id" name="phone" />
            </FormField>
            <FormField name="email" htmlFor="text-input-id" label="Email">
                <TextInput id="text-input-id" name="email" onChange={(event) => {
                    setRegisterEmail(event.target.value)
                }}/>
        </FormField>
            <Box direction="row" gap="medium">
            <Button primary type="submit" label="Create Account" background color='hoops' onClick={register}/>
            <Button primary type="reset" label="Clear" background color='hoops'/>
            </Box>
        </Form>
    </CardBody>
</Card>

)};