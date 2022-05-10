import React from 'react'
import Header from './header'
import Movie from './movie'
import Footer from './footer'
import ReviewForm from './reviewform'

const MovieList = () => {
  return (
    <div className="container">
        <br></br>
        <Header name="☆ MovieRaters ☆"/>
        <Movie />
        <ReviewForm />
        <Footer />
        <br></br>
    </div>
  )
}

export default MovieList