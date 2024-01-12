import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const handleLogin = async () => {
        console.warn("email,password", email, password);
        let result = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
            },
        });
    
        try {

             
             
            const type = 1;
            result = await result.json();
            console.warn(result);
    
            if (result.status === 'success') {
                 if(result.user.type==1)
                 {
                    window.location.href = 'http://127.0.0.1:8000/home';
                 } 
               else
               {
                alert("Login Successful");
                localStorage.setItem('user', JSON.stringify(result.user));
                navigate('/profile');
               }

            } 
            else if (result.status === 'fail') {
                alert("Failed");
                navigate('/login');
            }
            else {
                alert("Unexpected response");
            }
        } catch (error) {
            console.error("Error parsing JSON response", error);
        }
    };

    return (
        <div className="login">
            
            <input
                type="text"
                className="inputBox"
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />



            <input
                type="password"
                className="inputBox"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <button className="appButton" type="button" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default Login;
