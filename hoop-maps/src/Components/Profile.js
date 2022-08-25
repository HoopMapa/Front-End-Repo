import '../Component-Styling/Profile.css'
import { FaBasketballBall } from 'react-icons/fa';
import React, { UseState, useContext, useEffect } from 'react'
import { Box, Card, CardBody, Page, PageHeader, Anchor, Button, PageContent, Paragraph} from 'grommet';
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






  
 

    return (
  <Box>
  <Header></Header>
  <Card>

  <CardBody>
    <Page kind="narrow">      
            <PageHeader
                className="profileHeader"
                title={context.user[0].username}
                subtitle="A level 100 hooper"
                parent={<Anchor label="Go Explore" />}
                actions={<Button label="Edit" primary background color='hoops'/>}
             />
  <PageContent background="light-3" className="profileBio">
     <Paragraph >
         <p className="avatar"> <FaBasketballBall size={200}/> </p>
         <h2> My Bio</h2>
         <h2 className> Average player who screams "Kobe" whenever they throw a paper ball into a trash can. </h2>
    </Paragraph>
  </PageContent>
</Page>
</CardBody>
</Card>
</Box>
    
    
)}
    