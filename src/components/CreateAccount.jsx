import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';  // You'll need to create a CSS file for the sign-up page or reuse the login styles

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add validation logic here
        if (password === confirmPassword) {
            console.log('Account created with email:', email);
            // Redirect back to login or chatbot after successful signup
            navigate('/login'); // You can also redirect to /chatbot after successful signup
        } else {
            alert('Passwords do not match');
        }
    };

    return (
        <div className="sign-up-container">
            <div className="sign-up-card">
                <h2 className="sign-up-title">Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            required
                        />
                    </div>
                    <button type="submit" className="sign-up-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default CreateAccount;
