import './index.css'

const EventItem = props => {
  const {details, onClickEvent, isbuttonClicked} = props
  const {id, imageUrl, name, location} = details
  const clickedClass = isbuttonClicked ? 'clicked' : '' // Apply 'clicked' class based on prop

  const onClickImage = () => {
    onClickEvent(id)
  }

  return (
    <li className="eventItem">
      <button
        type="button"
        onClick={onClickImage}
        className={`button ${clickedClass}`}
      >
        <img src={imageUrl} alt="event" className="eventImage" />
      </button>

      <div className="eventDetailsContainer">
        <p className="eventItemHeading">{name}</p>
        <p className="eventItemdesc">{location}</p>
      </div>
    </li>
  )
}

export default EventItem
