import React from 'react'
import Dashboard from '../dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import NearestEvents from '../nearestEvents/NearestEvents'

const Home = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/nearest_events' element={<NearestEvents/>}/>
    </Routes>
  )
}

export default Home
