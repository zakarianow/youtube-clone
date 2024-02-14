import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import VideoDetail from '../pages/VideoDetail'
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from '../utils/constants'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({video: {id: {videoId}, snippet}}) => {

  return (
    <Card sx={{boxShadow: 'none',borderRadius: 0,flexGrow: 1, width: {md: '300px', sm: '300px', xs:'340px'} }} >
      <Link to={videoId ? `video/${videoId}`: demoVideoUrl }>
        <CardMedia image={snippet?.thumbnails?.high?.url } alt={snippet?.title} sx={{width: 358, height: 180}}/>
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
          <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
            <Typography variant='subtitle1' color='#fff' fontWeight='bold' >
              {snippet?.title.slice(0,50) || demoVideoTitle.slice(0,50)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography sx={{textDecoration: 'none'}} variant='subtitle2' color='gray' fontWeight='bold' >
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle fontSize='12px' color='gray' sx={{ml: '5px'}} />
            </Typography>
          </Link>
          
      </CardContent>      
    </Card>
  )
}

export default VideoCard
