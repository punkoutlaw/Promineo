import React from 'react'
import Header from './header'
import Movie from './movie'
import ReviewForm from './reviewform'
import Footer from './footer'

const MovieList = () => {
  return (
    <div className="container">
        <br></br>
        <Header />
        <Movie />
        <Footer />
        <br></br>
    </div>
  )
}

export default MovieList