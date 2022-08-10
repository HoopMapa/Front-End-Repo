import '../Component-Styling/Landing.css'
//import {Link} from "react-router-dom"; 
import { Box, Grid, Text, Accordion, AccordionPanel, Image} from 'grommet';
//import { Home } from 'grommet-icons';

export default function Landing(){
    return (
        <Box pad="medium">
            <Grid rows="small" gap="medium">
                <Box>
                    <h2>Our Mission</h2>
                    <br></br>
                    <p>To connect hoopers with their community.</p>   
                               <h2>Our Team</h2>       
                </Box>
                <Accordion>
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

