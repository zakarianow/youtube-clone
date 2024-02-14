import { Box, Stack, Typography, colors } from '@mui/material'
import React, { useEffect, useState } from 'react';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data?.items) )
  }, [searchTerm]);
  
  return (

      <Box sx={{p: 2, overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h5' fontWeight='bold' mb={2} sx={{display: 'flex',color: '#fff',width: '100%' , justifyContent: {xs: 'center', md: 'start'}}}>
          Search results for :  <span style={{color: '#FC1503', marginLeft: '10px'}}> {searchTerm}</span> videos
        </Typography>
        <Videos videos={videos}/>
      </Box>

  )
}

export default SearchFeed

