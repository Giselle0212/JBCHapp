import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const AdminLogin = { email, password };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/Admin/login', AdminLogin);

            if (response.status === 200) {
                console.log('Login successful');
                setMessage('Login successful!');
                navigate('/main'); // Navigate to main page or dashboard
            } else {
                console.error('Login failed');
                setMessage('Incorrect email or password');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setMessage('Error logging in. Please try again.');
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
            <Link to='/password/rest'>Forgot password?</Link>
            
        </div>
    );
};

export default AdminLogin;
