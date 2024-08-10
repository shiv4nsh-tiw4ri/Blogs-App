import React from 'react'
import Pagination from '../Components/Pagination'
import Blogs from '../Components/Blogs'
import Header from '../Components/Header'

const Home = () => {
  return (
    <div>
      <Header />
      <Blogs />
      <Pagination /> 
    </div>
  )
}

export default Home
