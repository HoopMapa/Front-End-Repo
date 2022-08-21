import { Box, Button, Card, CardBody, Grid,} from 'grommet';
import { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../Component-Styling/Explore.css';
import PostCard from "./Post.js"
import CreatePost from './createPost';


export default function Explore(){ 
const [showModal, setShowModal] = useState(false);
const [posts, setPosts] = useState([])
const url = "http://localhost:5004/posts"

useEffect(() => {
    fetch(url).then(res => res.json()).then(data => setPosts(data.data))
}, [])
const handleCreateclick = () => {
    setShowModal(true)
}

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

               <Box direction="row" gap="medium">
                    <Button onClick={handleCreateclick} type="submit" primary label="Create" background color='hoops'/>
                    <Button type="reset" primary label="Clear" background color='hoops'/>
                    <Button type="submit" primary label="Delete Post" background color='hoops'/>
               </Box>
            
           { showModal ? <CreatePost setShowModal= {setShowModal}/> : ""}
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
</Grid>

</Box>
</CardBody>
</Card>

)}