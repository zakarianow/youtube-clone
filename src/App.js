import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import VideoDetail from './pages/VideoDetail'
import ChannelDetail from './pages/ChannelDetail'
import Feed from './components/Feed'
import SearchFeed from './components/SearchFeed'

const App = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            children: [
                {
                    index: true, element: <Feed />
                },
                {
                    path: 'video/:id', element: <VideoDetail />
                },
                {
                    path: 'channel/:id', element: <ChannelDetail />
                },
                {
                    path: 'search/:searchTerm', element: <SearchFeed />
                }
            ]
        }
    ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
