import React, { useState } from 'react'

const RegistrationForm = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        event: "",
    });

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.event) {
            onRegister(formData);
            alert(`Thank you for registering, ${formData.name}!`);
            setFormData({name: "", email: "", event: ""});
        } else {
            alert("Please fill out all fields.")
        }
    };

  return (
    <div className='registration-form'>
        <h2>Register for an Event</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='name'>Full Name</label>
                <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter your full name'
                />
            </div>

            <div className='form-group'>
                <label htmlFor='email'>Email Address</label>
                <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Enter your email'
                />
            </div>
            <div className='form-group'>
                <label htmlFor='event'>Select Event</label>
                <select
                id='event'
                name='event'
                value={formData.event}
                onChange={handleChange}
                >
                    <option value="">Choose an event</option>
                    <option value="React Conference">React Conference</option>
                    <option value="JavaScript Summit">JavaScript Summit</option>
                </select>
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  );
};

export default RegistrationForm;