import '../Component-Styling/Header.css'
import { FaBasketballBall } from 'react-icons/fa';
import { Box, Button, Heading, Menu } from 'grommet';
import React, { useState } from "react";
//import { Notification } from 'grommet-icons';
//import {Link} from "react-router-dom"


export default function Header (props) {
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
        <Button onClick={() => (window.location.href="/")}>
        <p> <FaBasketballBall/> Hoop Maps </p> 
        </Button>
        </Heading>
        <Menu
          label ="Menu"
          items={[
            { label: 'Register', onClick: () => {window.location.href="/register"} },
            { label: 'Login', onClick: () => {window.location.href="/login"} },
            { label: 'Profile', onClick: () => {window.location.href="/profile"} },
            { label: 'Explore', onClick: () => {window.location.href="/explore"} },
         ]}
        />
    </Box>
    )
}
