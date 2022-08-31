import { Box, Button, Card, CardBody, Grid, } from 'grommet';
import React, { useState, useContext, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../Component-Styling/Explore.css';
import PostCard from "./Post.js"
import CreatePost from './createPost';
import Context from "../Context/Context.js"
import Header from '../Components/Header.js'
import {courtPins} from '../DBCourts.js'

//console.log(courtPins)



export default function Explore() {
    const context = useContext(Context)

    console.log(context.user)
    const [currCourt, setCurrCourt] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [posts, setPosts] = useState([])
    const url = "http://localhost:5004/posts"

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setPosts(data.data))
    }, [])
    const handleCreateclick = () => {
        setShowModal(true)
    }

    //const markerIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/3349/3349343.png",
    //  iconSize: [25, 25],
    //})

    //H.W.:
    //take in courtID From back end
    //do a fetch to back End and only have the courts from the back end on the map
    //when click on a court, save that court's id in state
    //use .filter to only show posts containing that courtID
    const marker = (lat, lon, name, id) => {
        return (
            <Marker position={[lat, lon, name]} eventHandlers={{
                    click: (e) => {
                    console.log('marker clicked', e);
                    context.setCurrCourt(id)
                    }
         
            }}>
            <Popup onClick>
                {name} <br /> Easily customizable.
            </Popup>
        </Marker>

        )
    }

    
    console.log(courtPins)
    // function createPins(){
    //     return courtPins.map((pin) => {
    //         return {
    //         <Marker position={[pin.courtLat, pin.courtLon]}>
    //         <Popup onClick>
    //             A pretty CSS3 popup. <br /> Easily customizable.
    //         </Popup>
    //         </Marker>}
    //     })
    // }

    //console.log(createPins())

    //create a helper function to create multiple markers
    // console.log(courtPins)
// const createPins = () => {
//     return marker(100, 100)
//     //marker(100, 100)
// }

//objects.map((object, i) => <ObjectRow obj={object} key={i} />)


//console.log(courtPins)

//courtPins.map(pin => ({pin}))
//createPins()

//console.log(courtPins)


//marker(100, 100)

    //     // console.log(createPins())


    return (
        <Box>
            <Header></Header>

            <Card>
                <CardBody>
                    <Box pad="medium">
                        <Grid columns="large" rows="large" gap="x-small">
                            <Box>
                                <h1>Court Feed</h1>
                             

                                <Card pad="medium" background="dark-1" gap="medium" className='postCard'>
                                    {posts.map(post => (
                                        <PostCard key={post.id} post={post} />
                                    ))}
                                </Card>



                                <Box direction="row" gap="medium">
                                    <Button onClick={handleCreateclick} type="submit" primary label="Create" background color='hoops' />
                                    <Button type="reset" primary label="Clear" background color='hoops' />
                                    <Button type="submit" primary label="Delete Post" background color='hoops' />
                                </Box>

                                {showModal ? <CreatePost setPosts={setPosts} posts={posts} setShowModal={setShowModal} /> : ""}
                            </Box>
                         
                        </Grid>

                    </Box>

                    <Box>
                        <MapContainer center={[0, 0]} zoom={13} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {/* <Marker position={[0, 0]}>
                                <Popup onClick>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker> */}
                            {/* {marker(200, 200)} */}
                            {courtPins.map((pin) => {

                                return marker(pin.courtLat, pin.courtLon, pin.courtName, pin)
                            })}        

                        </MapContainer>
                    
                        
                    </Box>
                </CardBody>
            </Card>
        </Box>

    )
}
