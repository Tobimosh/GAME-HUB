import React from 'react'
import { HStack } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

const NavBar = () => {
    return (
        <HStack>
            <img src={logo} className='w-20' alt="" />
            <p>NavBar</p>
        </HStack>
    )
}

export default NavBar