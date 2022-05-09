import React from 'react'
import Header from './header'
import Main from './main'
import ReviewGroup from './reviewgroup'
import Footer from './footer'

const container = () => {
  return (
    <div className="container">
        <br></br>
        <Header />
        <Main />
        <ReviewGroup />
        <Footer />
        <br></br>
    </div>
  )
}

export default container