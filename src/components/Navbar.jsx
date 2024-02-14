import { Image } from '@mui/icons-material'
import { Box, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack 
    direction='row' 
    alignItems='center' 
    p={2} 
    sx={{position: 'sticky', top: 0, background: '#000', justifyContent: 'space-between', height: '80px' }}>
      <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
        <img src={logo}  style={{width: '45px', height: '45px'}} alt='logo'/>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar
