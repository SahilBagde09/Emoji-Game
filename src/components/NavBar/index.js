// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isCorrectClick} = props
  let scoreNavSection
  if (isCorrectClick && currentScore < 12) {
    scoreNavSection = (
      <div className="score-section">
        <p className="score-style">Score: {currentScore}</p>
        <p className="score-style">Top Score: {topScore}</p>
      </div>
    )
  }
  return (
    <nav className="nav-bar">
      <div className="logo-name-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="nav-logo"
        />
        <h1 className="nav-name">Emoji Game</h1>
      </div>
      {scoreNavSection}
    </nav>
  )
}
export default NavBar
