import '../Component-Styling/Profile.css'
import { FaBasketballBall } from 'react-icons/fa';
import React, { useState, useContext, useEffect } from 'react'
import { Form, FormField, TextInput, Box, Card, CardBody, Page, PageHeader, Anchor, Button, PageContent, Paragraph} from 'grommet';
import { onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebase-config';
//import { user } from './Components/Login';
import Context from "../Context/Context.js"
import Header from "../Components/Header.js"
import { useNavigate } from 'react-router-dom';



export default function Profile(){ 
  const context = useContext(Context)
  const navigate = useNavigate()
  console.log(context.user)
const [value, setValue] = useState({id: 0}); 
const [formValue, setForm] = useState([]); 
const [hidden, setHidden] = useState(true);



const updateAcc = async (e) => {
  e.preventDefault();
  //displayName = e.target.email.value;

  //vaiables for contextState vs formState
  let fUsername = e.target.username.value;
  if (fUsername === "") {fUsername = context.user[0].username}
  let fPassword = e.target.password.value;
  if (fPassword === "") {fPassword = context.user[0].password}
  let fFirstName = e.target.firstname.value;
  if (fFirstName === "") {fFirstName = context.user[0].firstname}
  let fLastName = e.target.lastname.value;
  if (fLastName === "") {fLastName = context.user[0].lastname}
  let fPhoneNumber = e.target.phonenumber.value;
  if (fPhoneNumber === "") {fPhoneNumber = context.user[0].phonenumber}
  let fBio = e.target.bio.value;
  if (fBio === "") {fBio = context.user[0].bio}

  setForm({
      id: context.user[0].id,
      username: fUsername,
      password: fPassword,
      email: context.user[0].email,
      firstname: fFirstName,
      lastname: fLastName,
      phonenumber: fPhoneNumber,
      bio: fBio,
  })

  //context.setUser(formValue)
  //if (formValue.username !== null) { context.setUser(formValue)}
  //context.setUser(formValue);
  console.log(formValue)
}

const deleteAcc = async (e) => {
 e.preventDefault();
setValue({
 id: context.user[0].id               
})
context.setUser([{
  username: "null"
}])
}

const updateRequest = async () => {
  const URL = `http://localhost:5004/users/`

const response = await fetch(URL, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify( formValue),
})
const data = await response.json()
      
           return data;
   }

const deleteRequest = async () => {
const URL = `http://localhost:5004/users/${value.id}`
    
const response = await fetch(
URL,
     {
            headers: {
               Accept: 'application/json',
            'Content-Type': 'application/json',
             },
            method: 'delete',
           body: JSON.stringify(value),
          }
        )
         const data = await response.json();
         return data;
  }


//UseEffect (whenever page loads)
   useEffect(() => {
   deleteRequest().then(data => {
    console.log(data)
    if(context.user[0].username === "null") {
      navigate('/login');
context.setUser([]);
        console.log(context.user);
        
    }
     })
  }, [value]) //No dependency: continously run. 
// //Dependency array: will only run one of the values if the array changes
// console.log(context.user)

useEffect(() => {
  updateRequest().then(data => {
   console.log(data);  

   if (formValue.length !== 0) {
   navigate('/login');
   context.setUser([]);
  }
   //context.setUser(formValue)
    })
 }, [formValue]) 






 

  return (
  <Box>
  <Header></Header>
  <Card>
  

  <CardBody>
   
    <Page kind="narrow">      
            <PageHeader
                className="profileHeader"
                title={`${context.user[0].firstname} ${context.user[0].lastname}`}
                subtitle={`A lvl ${context.user[0].id} hooper`}
                parent={<Anchor label="Go Explore"/>}
                actions={<Button label="Edit Profile" primary background color='hoops' onClick={() => setHidden(!hidden)}/>}
             />
  <PageContent background="light-3" className="profileBio">
   
     <Paragraph >
         <p className="avatar"> <FaBasketballBall size={200}/> </p>
         <h1>{context.user[0].username}</h1>
         <h2 className> {`My Bio: ${context.user[0].bio}`} </h2>
    </Paragraph>
  </PageContent>
</Page>

<Page kind="narrow">      
            <PageHeader
                className="profileHeader"
                title="Most Recent Posts"
             />
  <PageContent background="light-3" className="profileBio">
   
     <Paragraph >

    </Paragraph>
  </PageContent>
</Page>

<Form   hidden={hidden}
        value={value}
        onReset={() => setForm([])}
        onSubmit={updateAcc}
        >   <FormField name="firstname" htmlFor="text-input-id" label="First Name">
            <TextInput id="text-input-id" name="firstname"/> </FormField>
            <FormField name="lastname" htmlFor="text-input-id" label="Last Name">
                <TextInput id="text-input-id" name="lastname"/> </FormField>
                <FormField name="username" htmlFor="text-input-id" label="Username">
                <TextInput id="text-input-id" name="username"/> </FormField>
            <FormField name="bio" htmlFor="text-input-id" label="Bio">
                <TextInput id="text-input-id" name="bio"/> </FormField>
            <FormField name="phonenumber" htmlFor="text-input-id" label="Phone Number">
                <TextInput id="text-input-id" name="phonenumber"/> </FormField>
            <FormField name="password" htmlFor="text-input-id" label="Password">
                <TextInput id="text-input-id" name="password" /> </FormField>
                  <Box direction="row" gap="medium">
            <Button primary type="submit" label="Save Changes and Logout" background color='hoops'/>
            <Button primary type="reset" label="Clear" background color='hoops' />
            <Button label="Delete Account" primary background color='hoops' onClick={deleteAcc} />
            </Box>
  </Form>
  

</CardBody>
</Card>
</Box>


    
    
)}
    