import React from "react";
import { useState, useRef, useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "../context/AuthProvider";
import { useCookies } from "react-cookie";

const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [newUsername, setNewUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // const [cookies, setCookie] = useCookies(["user"]);

  useEffect(() => {
    setErrMsg("");
  }, [newUsername, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ newUsername, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ newUsername, password, roles, accessToken });
      setNewUsername("");
      setPassword("");
      setSuccess(true);

      setCookie("Employee ID", newUsername, { path: "/" });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <div className="login">
            <div className="loginImage">
              <img src="/loginImage.jpg" alt="loginImage" height="400px" />
            </div>
            <h2 className="loginText">
              {" "}
              Login to view your insurance claims and policies{" "}
            </h2>
            <form className="loginForm" onSubmit={handleSubmit}>
              <div className="inputWrapper">
                <p>
                  <label>Employee ID: </label>
                  <input
                    type="text"
                    id="username"
                    onChange={(e) => setNewUsername(e.target.value)}
                    autoComplete="off"
                    value={newUsername}
                    required
                  ></input>
                </p>

                <p>
                  <label>Password: </label>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                    value={password}
                    required
                  ></input>
                </p>

                <button>Login</button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default Login;
