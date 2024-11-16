import React, { useState } from 'react'
import RegistrationForm from '../components/RegistrationForm';

const Register = () => {
    const [formData, setFormData] = useState({ name: "", email: ""});
    const [attendees, setAttendees] = useState([]);

    const handleRegister = (newAttendee) => {
        setAttendees((prevAttendees) => [...prevAttendees, newAttendee]);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Registered: ${formData.name} (${formData.email})`);
    };

  return (
    <><form className='register-form' onSubmit={handleSubmit}>
          <h2>Register for an Event</h2>
          <input
              type='text'
              name='name'
              placeholder='Your Name'
              value={formData.name}
              onChange={handleChange} />
          <input
              type='email'
              name='email'
              placeholder='Your Email'
              value={formData.email}
              onChange={handleChange} />
          <button type='submit'>Register</button>
      </form>
      
      <div className='register-page'>
        <RegistrationForm onRegister={handleRegister} />
        <div className='attendees'>
            <h3>Registered Attendees:</h3>
            <ul>
                {attendees.map((attendee, index) => (
                    <li key={index}>
                        {attendee.name} - {attendee.email} ({attendee.event})
                    </li>
                ))}
            </ul>
        </div>
          </div></>
  );
};

export default Register;