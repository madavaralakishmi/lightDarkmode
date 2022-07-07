// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {onbutton: false}

  onClickButton = () => {
    this.setState(prevState => ({onbutton: !prevState.onbutton}))
  }

  render() {
    const {onbutton} = this.state
    const classButton = onbutton ? 'light' : 'Dark'
    const button = onbutton ? 'Dark Mode' : 'Light Mode'
    return (
      <div className="back">
        <div className={`container ${classButton}`}>
          <h1>Click to change the mode</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {button}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
