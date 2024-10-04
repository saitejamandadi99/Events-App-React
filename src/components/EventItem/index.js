// Write your code here
import './index.css'

const EventItem = props => {
  const {details} = props
  const {id, imageUrl, name, location, registrationStatus} = details
  return (
    <li className="eventItem">
      <img src={imageUrl} alt="event" className="eventImage" />
      <div className="eventDetailsContainer">
        <h1 className="eventItemHeading">{name}</h1>
        <p className="eventItemdesc">{location}</p>
      </div>
    </li>
  )
}

export default EventItem
