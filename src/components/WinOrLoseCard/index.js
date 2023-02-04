// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {currentScore, onClickPlayAgain, isCorrectClick} = props
  const playAgain = () => {
    onClickPlayAgain()
  }
  let displayMsg
  let cardImage
  let score
  if (isCorrectClick) {
    displayMsg = 'You Won'
    score = 'Best Score'
    cardImage = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    displayMsg = 'You Lose'
    score = 'Score'
    cardImage = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }
  return (
    <div className="win-lose-container">
      <div className="info-container">
        <h1 className="display-msg">{displayMsg}</h1>
        <p className="best-score">{score}</p>
        <p className="score">{`${currentScore}/12`}</p>
        <button className="play-again-button" type="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img src={cardImage} className="win-lose-image" alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
