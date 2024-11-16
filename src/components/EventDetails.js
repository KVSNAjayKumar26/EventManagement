import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetails = ({ events }) => {
    const { eventId } = useParams();
    const event = events.find((e) => e.id === parseInt(eventId));

    if (!event) {
        return <div className='event-details'><h2>Event not found.</h2></div>;
    }
  return (
    <div className='event-details'>
        <h2>{event.name}</h2>
        <p><strong>Date:</strong>{event.date}</p>
        <p><strong>Time:</strong>{event.time}</p>
        <p><strong>Location:</strong>{event.location}</p>
        <p><strong>Description:</strong>{event.description}</p>
        <button onClick={() => alert("Register for this event!")}>
            Register
        </button>
    </div>
  )
}

export default EventDetails