import './styles/registrationview.css'
import React, { useState } from 'react';

function RegistrationView () {
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          fetch('/api/register/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
          })
          .then(response => {
            if (response.ok) {
              console.log('Registration successful');
            } else {
                response.json().then(errors => {
                  console.log(errors);
                });
              }
            });
          }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit">Register</button>
                </form>
        </div>
    )
}

export default RegistrationView