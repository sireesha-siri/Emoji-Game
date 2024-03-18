// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emoji, onClickEmoji} = props
  const {emojiName, emojiUrl, id} = emoji
  /* onClickEmojiItem sends clicked emoji id to EmojiGame main page  */
  const onclickEmojiItem = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji-item">
      <button type="button" onClick={onclickEmojiItem}>
        <img key={id} src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
