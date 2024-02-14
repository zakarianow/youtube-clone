import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Box } from '@mui/material';
import ChannelCard from '../components/ChannelCard';
import Videos from '../components/Videos';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);


  const {id} = useParams();
  
    
    useEffect(() => {
      const fetchResults = async () => {
        const channelData = await fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then(()=> setChannelDetail(channelData?.items[0]))
        
        const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then(() => setVideos(videosData?.items));
        console.log(videosData) 
      }  
    }, [id])

    console.log(videos)
    console.log(id)

  return (
    <Box minHeight="95vh">
      <Box>
        <div 
          style={{background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)', zIndex: 10, height: '300px' }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop= '-93px'/>
      </Box>
     <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
