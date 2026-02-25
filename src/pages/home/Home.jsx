import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Dashboard from '../dashboard/Dashboard'
import Projects from '../projects/Projects'

const Home = () => {
  return (
    <div>
      <Dashboard/>
      <Projects />
    </div>
  )
}

export default Home
