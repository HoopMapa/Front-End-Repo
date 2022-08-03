import '../Component-Styling/Explore.css'
import React, { useState } from 'react'
import Icon from 'leaflet';
import { Grommet, Card, CardBody, Box, Grid } from 'grommet';
import { FaBasketballBall } from 'react-icons/fa';
import { Form, FormField, TextInput, Button} from 'grommet'
import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'


export default function Explore(){ 
const [value, setValue] = React.useState({});
//const markerIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/3349/3349343.png",
  //  iconSize: [25, 25],
//})
    return (

<Card>
<CardBody>
<Box pad="medium">
    <Grid columns="medium"  rows="large" gap="x-small">
        <Box>
            <h1>Court Feed</h1>
            <Card>
                <CardBody>
                    <h2>@ProPlayer</h2>
                    <p>Up 3 at McCarren!</p>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <h2>@ProPlayer</h2>
                    <p>Up 3 at McCarren!</p>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <h2>@ProPlayer</h2>
                    <p>Up 3 at McCarren!</p>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <h2>@ProPlayer</h2>
                    <p>Up 3 at McCarren!</p>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <h2>@ProPlayer</h2>
                    <p>Up 3 at McCarren Park! Get in while we still playing till 5pm</p>
                </CardBody>
            </Card>
        </Box>
        <Box>
            <MapContainer center={[40.72154,-73.95548]} zoom={13} scrollWheelZoom={true}>
                 <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            <Marker position={[40.72154,-73.95548]}>
             <Popup>
             A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
            </MapContainer>
        </Box>
        <Box pad="large">
            <Card>
                <CardBody>
                <h1>Current Court</h1>
                    <h1>McCarren Park</h1>
                </CardBody>
            </Card>
            <Card>

            <CardBody>
            <h1>Post</h1>
             <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onReset={() => setValue({})}
            onSubmit={({ value }) => {}}
            >
                <FormField name="comment" htmlFor="text-input-id" label="Comment">
                    <TextInput id="text-input-id" name="name" />
                </FormField>
               <Box direction="row" gap="medium">
                    <Button type="submit" primary label="Submit" background color='hoops'/>
               
                    <Button type="reset" primary label="Clear" background color='hoops'/>
                    <Button type="submit" primary label="Delete Post" background color='hoops'/>
               </Box>
            
        </Form>
        </CardBody>
        </Card>
        </Box>
      
</Grid>

</Box>
</CardBody>
</Card>

)}