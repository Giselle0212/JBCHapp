import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminReg = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const newAdmin = {name,email,password};
    
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/admin', newAdmin);

            if (response.status === 200) {
                console.log('Registration successful');
                setMessage('Registration successful!');
                navigate('/main'); 
            } else {
                console.error('Registration failed');
                setMessage('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage('Error registering. Please try again.');
        }
    };

    return (
        <div>
            <h2>Admin Registration</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
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
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
            <Link to='/admin/login'>Have an account? Login.</Link>
        </div>
    );
};

export default AdminReg;
