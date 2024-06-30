import React, { useState } from 'react';
import './App.css';
import otrLogo from './images/otrLogo.png';
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                setMessage('Login successful!');
                // Handle successful login (e.g., redirect, save token, etc.)
            } else {
                const error = await response.json();
                setMessage(`Login failed: ${error.detail}`);
            }
        } catch (error) {
            setMessage(`An error occurred: ${error.message}`);
        }
    };

    return (
        <div>
            <div className="login-background">
                <div className="login-image"></div>
                <div>
                    <div><img src={otrLogo} alt="OTR LOGO" width="100" /></div>
                    <div>
                        <div><h2>Server Cluster App</h2></div>
                    </div>
                    <div className="form-container">
                        <form onSubmit={handleLogin}>
                            <div>
                                <input
                                    className="username-container"
                                    type="text"
                                    placeholder="Username or Email"
                                    name="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
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
                                <button className="sign-in-btn" type="submit">Sign In</button>
                            </div>
                        </form>
                    </div>
                    <div className="signup-options-container">
                        <div className="line-break"></div>
                        <div>or</div>
                        <div className="line-break"></div>
                    </div>
                    <div>
                        <div>Sign in with Google</div>
                        <div>
                            <div>Are you new?</div>
                            <div>
                                <button className="newAccount-btn">
                                    <Link to="/login/newaccount">
                                        Create an account
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    {message && <div>{message}</div>}
                </div>
            </div>
        </div>
    );
}

export default Login;
