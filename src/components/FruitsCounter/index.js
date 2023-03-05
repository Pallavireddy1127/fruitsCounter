// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}
  onEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }
  onEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }
  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="fruits-counter-container">
        <div className="fruits-counter">
          <h1 className="heading">
            Bob ate <span className="design">{mangoesCount}</span> mangoes
            <span className="design"> {bananasCount}</span> bananas
          </h1>
          <div className="counters-control-container">
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.onEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
         
      </div>
    )
  }
}

export default FruitsCounter
