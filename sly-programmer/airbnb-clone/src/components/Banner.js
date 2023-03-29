import '../styles/Banner.css';
import React, { useState } from 'react'
import { Button } from '@mui/material';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate()
  const [showSearch, setShowSearch] = useState(false)
  return (
    <div className='banner'>
      <div className="banner__search">
        {showSearch && <Search/>}

        <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className='banner__info'>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, inventore.</h5>
        <Button variant='outlined' onClick={() => navigate("/search")}>Explore Nearby</Button>
      </div>
    </div>
  )
}

export default Banner
