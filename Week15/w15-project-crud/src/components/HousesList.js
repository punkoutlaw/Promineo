import React from 'react'
import { House } from './House';
import { housesApi } from '../rest/HousesApi'

export class HousesList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchHouses();
    };

    fetchHouses = async () => {
        const houses = await housesApi.get();
        this.setState({ houses });
    };

    updateHouse = async (updatedHouse) => {
        await housesApi.put(updatedHouse);
        this.fetchHouses();
    }

  render() {
    return (
      <div>
        <div className='card-header bg-light' id='house-header'>
          <h1>My Houses</h1>
        </div>
        <div className='card-body bg-secondary' id='house-body'>
            {this.state.houses.map((house) => (
                <House
                  house={house}
                  key={house._id}
                  updateHouse={this.updateHouse}
                  />
            ))}
        </div>
      </div>
    )
  }

}