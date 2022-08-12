import { Box, Button, Card, CardBody, Form, FormField, Grid, TextInput } from 'grommet';
import { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../Component-Styling/Explore.css';
import PostCard from "./Post.js"

export default function Explore(){ 
const [value, setValue] = useState({});
const [posts, setPosts] = useState([])
const url = "http://localhost:5004/posts"

useEffect(() => {
    fetch(url).then(res => res.json()).then(data => setPosts(data.data))
}, [])

console.log(posts)
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
            <Card pad="small" background="dark-1" gap="medium">
                {posts.map(post => (
                    <PostCard key ={post.id} post={post} />
                ))}
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