import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const MusicPlayList = props => {
  const {eachSong, deleteSong} = props
  const {id, imageUrl, name, genre, duration} = eachSong

  const onClickDeleteBtn = () => {
    deleteSong(id)
  }

  return (
    <li className="list-item">
      <div className="name-container">
        <img src={imageUrl} className="image" alt="track" />
        <div>
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="delete-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={onClickDeleteBtn}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default MusicPlayList
