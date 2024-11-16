import React from 'react'

const AttendeeList = ({ attendees }) => {
  return (
    <div className='attendee-list'>
        <h2>Registered Attendees</h2>
        {attendees.length > 0 ? (
            <ul>
                {attendees.map((attendee, index) => (
                    <li key={index}>
                        <strong>{attendee.name}</strong> - {attendee.email}
                    </li>
                ))}
            </ul>
        ) : (
            <p>No attendees registered yet .</p>
        )}
    </div>
  );
};

export default AttendeeList;