// src/pages/Events.js
import React, { useState } from "react";
import AttendeeList from "../components/AttendeeList";
import { Link } from "react-router-dom";

const eventList = [
    { id: 1, name: "React Conference", date: "2024-12-01" },
    { id: 2, name: "JavaScript Summit", date: "2024-12-15" },
];

const Events = () => {

    const [attendees, setAttendees] = useState([
        { name: "Alice Johnson", email: "alice@example.com" },
        { name: "Bob Smith", email: "bob@example.com" },
    ]);
    return (
        <div className="events">
            <h2>Upcoming Events</h2>
            <ul>
                {eventList.map(event => (
                    <li key={event.id}>
                        <Link to={`/events/${event.id}`}>
                        {event.name} - {event.date}
                        </Link>
                    </li>
                ))}
            </ul>

            <h2>Event Attendees</h2>
            <AttendeeList attendees={attendees} />
        </div>
    );
};

export default Events;
