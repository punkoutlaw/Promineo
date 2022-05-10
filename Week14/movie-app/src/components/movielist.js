import React from 'react'
import Header from './header'
import Movie from './movie'
import Footer from './footer'
import ReviewForm from './reviewform'
import Review from './review'

const MovieList = () => {
  return (
    <div className="container">
        <br></br>
        <Header name="☆ MovieRaters ☆"/>
        <Movie />
        <Review />
        <Footer />
        <br></br>
    </div>
  )
}

export default MovieList