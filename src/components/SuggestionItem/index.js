// Write your code here
import './index.css'

const SuggestionItems = props => {
  const {suggestionDetails, suggestionFunction} = props
  const {suggestion} = suggestionDetails

  const getSuggestion = () => {
    suggestionFunction(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion-name">{suggestion}</p>
      <button
        className="suggestion-button"
        type="button"
        onClick={getSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="button-icon"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItems
