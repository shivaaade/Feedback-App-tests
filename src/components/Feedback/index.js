// Write your React code here.
// Write your React code here.

// Write your React code here.

import {Component} from 'react'

import './index.css'

const Welcome = props => {
  const {userDetails, giveFeedbackFinal} = props
  const {id, name, imageUrl} = userDetails

  const giveFeedback = () => {
    giveFeedbackFinal(id)
  }

  return (
    <li>
      <img alt={name} onClick={giveFeedback} src={imageUrl} />
    </li>
  )
}

class Feedback extends Component {
  state = {first: '', second: 'disadd'}

  giveFeedbackFinal = id => {
    this.setState({first: 'disadd', second: ''})
  }

  render() {
    const {resources} = this.props
    const {
      emojis = resources.emojis,
      loveEmojiUrl = resources.loveEmojiUrl,
    } = resources
    const {first, second} = this.state

    console.log(loveEmojiUrl)

    return (
      <div>
        <div>
          <h1>How satisfied are you with our customer support performance</h1>
          <ul className={first}>
            {emojis.map(each => (
              <Welcome
                giveFeedbackFinal={this.giveFeedbackFinal}
                userDetails={each}
                key={each.id}
              />
            ))}
          </ul>
          <div className={second}>
            <img alt="love emoji" src={loveEmojiUrl} />
            <h1>Thank You</h1>
            <p>How satisfied are you with our customer</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Feedback
