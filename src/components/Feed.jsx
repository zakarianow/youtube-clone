import { Box, Stack, Typography, colors } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Videos from './Videos'
import Sidebar from './Sidebar'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items) )
  }, [selectedCategory])
  
  return (
    <Stack 
    sx={{flexDirection: {sm: 'column', md: 'row'}}} >
      <Box sx={{height: {sm: 'auto', md: '92vh', borderRight: '1px solid #3d3d3d', px: {sm:0, md: 2}}}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography variant='body2' sx={{color: '#fff', mt: 1.5}} className='copyright'>
          Copyright 2024 ZB Media
        </Typography>
      </Box>
      <Box sx={{p: 2, overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{display: 'flex',color: '#fff',width: '100%' , justifyContent: {xs: 'center', md: 'start'}}}>
          {selectedCategory} <span style={{color: '#FC1503', marginLeft: '10px'}}> videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
      
    </Stack>
  )
}

export default Feed
