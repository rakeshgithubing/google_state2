// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {item, functionValue} = props
  const {suggestion} = item

  const onValue = () => {
    functionValue(suggestion)
  }

  return (
    <div className="container-1">
      <div className="item-container">
        <p className="paragraph">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-logo"
          onClick={onValue}
        />
      </div>
    </div>
  )
}

export default SuggestionItem
