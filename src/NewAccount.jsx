import React, { useState } from 'react';
import otrLogo from './images/otrLogo.png';
import { Link } from 'react-router-dom';
import './App.css';

function NewAccount() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/signup/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, name, password })
            });

            if (response.ok) {
                const data = await response.json();
                setMessage('Signup successful!');
                // Handle successful signup (e.g., redirect to login)
            } else {
                const error = await response.json();
                setMessage(`Signup failed: ${error.detail}`);
            }
        } catch (error) {
            setMessage(`An error occurred: ${error.message}`);
        }
    };

    return (
        <div>
            <div>
                <div><img src={otrLogo} alt="OTR LOGO" width="100" /></div>
                <div>
                    <div><h2>Server Cluster App</h2></div>
                </div>
                <div className="form-container">
                    <div>Create an account</div>
                    <form onSubmit={handleSignup}>
                        <div>
                            <input
                                className="username-container"
                                type="text"
                                placeholder="Username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                className="email-container"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                className="name-container"
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                className="password-container"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="container">
                                I have read and agree to the Terms and Conditions
                                <input type="checkbox" required />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <label className="container">
                                I consent to the Privacy Policy
                                <input type="checkbox" required />
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div>
                            <button className="sign-in-btn" type="submit">Create my account</button>
                        </div>
                    </form>
                </div>
                <div className="signup-options-container">
                    <div className="line-break"></div>
                    <div>Or</div>
                    <div className="line-break"></div>
                </div>
                <div>
                    <div>Sign up with Google</div>
                    <div>
                        <button className="newAccount-btn">
                            <Link to="../login">Already have an account</Link>
                        </button>
                    </div>
                </div>
                {message && <div>{message}</div>}
            </div>
        </div>
    );
}

export default NewAccount;
