// Write your code here

import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    value: '',
  }

  changingValues = event => {
    this.setState({
      value: event.target.value,
    })
  }

  functionValue = suggestion => {
    this.setState({
      value: suggestion,
    })
  }

  render() {
    const {suggestionsList} = this.props
    const {value} = this.state

    const filteredData = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(value.toLowerCase()),
    )

    console.log(filteredData)
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="container">
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              value={value}
              onChange={this.changingValues}
            />
          </div>
          {filteredData.map(eachObject => (
            <SuggestionItem
              item={eachObject}
              key={eachObject.id}
              functionValue={this.functionValue}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
