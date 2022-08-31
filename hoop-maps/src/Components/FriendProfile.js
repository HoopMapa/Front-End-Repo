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
const [value, setValue] = useState(3); 


const friendRequest = async () => {
    const URL = `http://localhost:5004/users/${value}`
    
    const response = await fetch(
    URL,
        {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            method: 'GET',
          }
        )
        const data = await response.json();
        return data;

}


const friendAcc = async (e) => {
    e.preventDefault();
   setValue(
   true              
   )
   }

useEffect(() => {
    friendRequest().then(data => {
     console.log(data)

     console.log(value)
      })
   }, [value])

   friendAcc()

return (
    <Box>
  <Header></Header>
  <Card>
  

  <CardBody>
   
    <Page kind="narrow">      
            <PageHeader
                className="profileHeader"
               // title={`${value.user[0].firstname} ${value.user[0].lastname}`}
               // subtitle={`A lvl ${value.user[0].id} hooper`}
                parent={<Anchor label="Go Explore"/>}
             />
  <PageContent background="light-3" className="profileBio">
   
     <Paragraph >
         <p className="avatar"> <FaBasketballBall size={200}/> </p>
         <h1></h1>
         <h2 className> {`My Bio:`} </h2>
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

  

</CardBody>
</Card>
</Box>








)


      
  }