import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'




const Sidebar = ({selectedCategory, setSelectedCategory}) => {

  return (
    <Stack direction="row" sx={{flexDirection: {md: 'column'}, position: 'sticky', top: '80px', overflowY: 'auto', height: {sm: 'auto', md: '95%'}}} >
      {categories.map((category, idx) => (
        <button className='category-btn' key={idx} 
        style={{background: category.name === selectedCategory && '#FC1503', color: '#fff' }} 
        onClick={() => setSelectedCategory(category.name)}
        >
          <span style={{marginRight: '15px', color: category.name === selectedCategory ? 'white' : 'red' }}>{category.icon}</span>
          <span style={{opacity: category.name === selectedCategory ? '1' : '0.7'}}>{category.name}</span>
        </button>
      ))}      
    </Stack>
  )
}

export default Sidebar
