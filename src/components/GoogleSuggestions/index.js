// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItems from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {initialSearchInput: ''}

  getSuggestions = suggestion => {
    this.setState({initialSearchInput: suggestion})
  }

  searchQuery = event => {
    this.setState({initialSearchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {initialSearchInput} = this.state
    const searchInput = initialSearchInput.toLowerCase()
    const finalResult = suggestionsList.filter(item =>
      item.suggestion.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-logo"
          alt="google logo"
        />
        <div className="search-card">
          <div className="search-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-icon"
              alt="search icon"
            />
            <input
              className="search-input"
              type="search"
              placeholder="Search Google"
              value={initialSearchInput}
              onChange={this.searchQuery}
            />
          </div>
          <ul className="suggestions-container">
            {finalResult.map(items => (
              <SuggestionItems
                suggestionDetails={items}
                key={items.id}
                suggestionFunction={this.getSuggestions}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
