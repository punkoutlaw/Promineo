import React, { Component } from 'react'
import './index.css';
import { HousesList } from './components/HousesList'

export default class App extends Component {
  render() {
    return (
      <div>
          <HousesList />
      </div>
    )
  }
}