import { Box } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {

  return (
    <Box sx={{backgroundColor: '#000'}}>
        <Navbar />
        <Outlet />
    </Box>
  )
}

export default RootLayout
