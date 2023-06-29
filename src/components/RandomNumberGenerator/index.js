// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateRandomNumber = () => {
    this.setState({number: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {number} = this.state

    console.log(Math.ceil(Math.random() * 100))

    return (
      <div className="bg-container">
        <div className="random-number-card-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.generateRandomNumber}>
            Generate
          </button>
          <p>{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
