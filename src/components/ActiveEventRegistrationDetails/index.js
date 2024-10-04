// Write your code here
import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props
  switch (registrationStatus) {
    case 'YET_TO_REGISTER':
      return (
        <div className="registrationStatus">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="registrationImage"
          />
          <p>
            A live performance brings so much to your relationship with dance
          </p>
          <button type="button" className="RegisterButton">
            Register Here
          </button>
        </div>
      )

    case 'REGISTERED':
      return (
        <div className="registrationStatus">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="registrationImage"
          />
          <h1>You have already registered for the event</h1>
        </div>
      )

    case 'REGISTRATIONS_CLOSED':
      return (
        <div className="registrationStatus">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="registrationImage"
          />
          <h1>Registrations Are Closed Now!</h1>
          <p>Stay tuned. We will reopen</p>
        </div>
      )

    default:
      return (
        <div className="registrationStatus">
          <p>Click on an event, to view its registration details</p>
        </div>
      )
  }
}

export default ActiveEventRegistrationDetails
