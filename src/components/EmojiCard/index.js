// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmojiCheck} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const emojiClick = () => {
    onClickEmojiCheck(id)
  }
  return (
    <li className="emoji-card">
      <button type="button" onClick={emojiClick} className="emoji-button">
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}
export default EmojiCard
