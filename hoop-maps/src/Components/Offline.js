import '../Component-Styling/Header.css'
import { FaBasketballBall } from 'react-icons/fa';
import { Box, Button, Heading, Menu } from 'grommet';
import React, { useContext, useState } from "react";
//import { Notification } from 'grommet-icons';
//import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import Context from "../Context/Context.js"



export default function Offline (props) {
    let navigate = useNavigate();
    const context = useContext(Context)
    //console.log(context.user)

    return (
    <Box 
        className='headerBar'
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='hoops'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}
        {...props} 
    >
        <Heading level='3' margin='none'>
        <Button onClick={() => {context.setUser([]); navigate('/')}}>
        <p> <FaBasketballBall/> Hoop Maps </p> 
        </Button>
        </Heading>
        <Menu
          label ="Menu"
          items={[
            { label: 'Register', onClick: () => { navigate('/register') } },
            { label: 'Login', onClick: () => {navigate('/login') } },
         ]}
        />
    </Box>
    )
}
