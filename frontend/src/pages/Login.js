import React, { useEffect } from "react";
import { useState, useRef } from "react";

const Login = () => {

    const database = {
        "EmployeeID": "58001001",
        "Password": "iLoveTT!23",
    };

    const userRef = useRef();
    const errRef = useRef();

    const [newUsername, setNewUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        setErrMsg("");
    }, [newUsername, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(newUsername, password);
        setNewUsername("");
        setPassword("");
        setSuccess(true)

        return (
            console.log("submitted")
        );
    }

return (
    <div className="login">
        <p> Login to view your insurance claims and policies</p>
        <form onSubmit={handleSubmit}>
            <p>
                <label>Employee ID</label>
                <input type="text" id="username" onChange={(e) => setNewUsername(e.target.value)} autocomplete="off" value={newUsername} required></input>
            </p>
            <p>
                <label>Password</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} autocomplete="off" value={password} required></input>
            </p>

            <button>Login</button>

            <p>{newUsername}</p>
            <p>{password}</p>
        </form>
    </div>
);

};

export default Login;
