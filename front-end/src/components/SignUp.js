import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        const auth= localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }

    },[])



    const collectData = async () => {
        console.warn(name, email, password);
    
        const result = await fetch('http://127.0.0.1:8000/api/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
    
        const data = await result.json();
    
        if (data.status === 'error') {
            // User is already registered, show an error message
            alert(data.message);
        } else {
            // Registration successful, proceed with navigation
            localStorage.setItem("user", JSON.stringify(data));
            navigate('/');
            alert("Registration successful!");
        }
    }

    return (
        <div className='register'>
            <h1>Register</h1>
            <input className="inputBox" type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input className="inputBox" type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="inputBox" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={collectData} className="appButton" type="submit">SignUp</button>
        </div>
    );
}

export default SignUp;