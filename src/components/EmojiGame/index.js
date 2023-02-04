/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    correctClicksEmojiList: [],
    isCorrectClick: true,
    topScore: 0,
    currentScore: 0,
  }

  onClickEmojiCheck = id => {
    const {correctClicksEmojiList} = this.state
    if (Array.from(correctClicksEmojiList).includes(id)) {
      this.setState(prevState => ({isCorrectClick: !prevState.isCorrectClick}))
    } else {
      this.setState(prevState => ({
        correctClicksEmojiList: [...prevState.correctClicksEmojiList, id],
        currentScore: prevState.currentScore + 1,
      }))
    }
  }

  onClickPlayAgain = () => {
    const {currentScore} = this.state
    this.setState(prevState => ({
      isCorrectClick:
        prevState.currentScore === 12
          ? prevState.isCorrectClick
          : !prevState.isCorrectClick,
      correctClicksEmojiList: [],
      currentScore: 0,
      topScore:
        currentScore > prevState.topScore
          ? prevState.currentScore
          : prevState.topScore,
    }))
  }

  render() {
    const {emojisList} = this.props
    const shuffledEmojiList = emojisList.sort(() => Math.random() - 0.5)
    const {topScore, currentScore, isCorrectClick} = this.state
    let showCode
    if (isCorrectClick) {
      if (currentScore === 12) {
        showCode = (
          <WinOrLoseCard
            currentScore={currentScore}
            isCorrectClick={isCorrectClick}
            onClickPlayAgain={this.onClickPlayAgain}
          />
        )
      } else {
        showCode = (
          <ul className="emoji-container">
            {shuffledEmojiList.map(eachEmoji => (
              <EmojiCard
                emojiDetails={eachEmoji}
                key={eachEmoji.id}
                onClickEmojiCheck={this.onClickEmojiCheck}
              />
            ))}
          </ul>
        )
      }
    } else {
      showCode = (
        <WinOrLoseCard
          currentScore={currentScore}
          isCorrectClick={isCorrectClick}
          onClickPlayAgain={this.onClickPlayAgain}
        />
      )
    }
    return (
      <>
        <NavBar
          currentScore={currentScore}
          topScore={topScore}
          isCorrectClick={isCorrectClick}
        />
        <div className="bg-container">{showCode}</div>
      </>
    )
  }
}
export default EmojiGame
