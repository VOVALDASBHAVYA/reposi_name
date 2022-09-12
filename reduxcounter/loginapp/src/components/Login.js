import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    function login() {
        if (name === password) {
            navigate("/dashboard");
        } else {
            alert("Invalid Username / Password");
        }
    }
    return (
        <div className='container'>
            <h1>Login Application</h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInputUserName" class="form-label">User Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit" class="btn btn-primary" onClick={login}>LogIn</button>
            </form>
        </div>
    )
}

export default Login
