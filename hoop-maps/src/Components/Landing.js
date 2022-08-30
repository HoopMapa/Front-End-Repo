import '../Component-Styling/Landing.css'
//import {Link} from "react-router-dom"; 
import { Box, Grid, Text, Accordion, AccordionPanel, Image,PageHeader,Button} from 'grommet';
//import { Home } from 'grommet-icons';

export default function Landing(){
    return (
        <Box pad="medium">
            <Grid rows="small" gap="medium">
                <Box>
                    <PageHeader
                        title="Our Mission"
                        subtitle={`Hoop Maps strives to get real time updates of courts around you, with the option to sign up and update players with whats going on at the court you are at or check out what is going on in courts nearby.`}
                        // actions={<Button label="Get Started" primary onClick={() => (window.location.href="/explore")} />}
                        //   responsive
                    />
                               
                </Box>
                <Accordion>
                    <h2>Our Team</h2>       
                     <AccordionPanel label="Shevaughn">
                        <Box pad="medium" background="light-2">
                            <Box height="small" width="small">
                                <Image
                                fit="cover"
                               src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                                />
                             </Box>
                            <Text>
                                Shevaughn
                            </Text>
                        </Box>
                     </AccordionPanel>
                    <AccordionPanel label="Jared" img src ="">
                        <Box pad="medium" background="light-2">
                        <Box height="small" width="small">
                            <Image
                            fit="cover"
                             src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                            />
                        </Box>
                             <Text>
                                 Jared
                            </Text>
                        </Box>
                    </AccordionPanel>
                    <AccordionPanel label="Aldo">
                        <Box pad="medium" background="light-2">
                        <Box height="small" width="small">
                            <Image
                                fit="cover"
                             src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                            />
                        </Box>
                             <Text>
                                 Aldo
                            </Text>
                        </Box>
                    </AccordionPanel>
                </Accordion>
            </Grid>
        </Box>
    )
}

