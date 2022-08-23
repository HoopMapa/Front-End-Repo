import '../Component-Styling/Profile.css'
import { FaBasketballBall } from 'react-icons/fa';
import { Card, CardBody, Page, PageHeader, Anchor, Button, PageContent, Paragraph} from 'grommet';
import { updateCurrentUser } from 'firebase/auth';
import { auth } from '../firebase-config';

console.log(`${auth.currentUser}`)
//let displayName = `${auth.currentUser.email}`

export default function Profile(){ 
    return (
  <Card>

  <CardBody>
    <Page kind="narrow">      
            <PageHeader
                className="profileHeader"
                title="User"
                subtitle="A LVL 100 Hooper."
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
    
    
)}