import axios from 'axios';
import React, { useState } from 'react';
import { useSignIn } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import AutoHideToast from '../Toast/AutoHideToast';

function Login() {


    const signIn = useSignIn()
    const navigate = useNavigate()
    const [toastState, setToastState] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault();

        console.log({ email, password })

        try {
            const response = await axios.post("http://localhost:3001/login/login", { email, password })

            console.log(response)

            if (response.status === 200 && response.data.token) {
                signIn({
                    token: response.data.token,
                    expiresIn: 3600,
                    tokenType: "Bearer",
                    authState: { user: response.data.user }
                })

                return navigate("/")

            }
        } catch (error) {
            console.log(error)
        }

        setToastState(true)

    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="container">
            <div className="col-lg-8 m-auto d-block">
                <form onSubmit={onSubmit}>
                    <br />
                    <div className="form-group">
                        <input placeholder='e-mail' type="email" name="email" id="email" required className="form-control"
                            onChange={e => setEmail(e.target.value)} />
                        <small id="emailvalid" className="form-text invalid-feedback">
                            Your email must be a valid northeastern email
                        </small>
                    </div>
                    <br />

                    <div className="form-group">
                        <input placeholder='password' type="password" name="pass" id="password" className="form-control"
                            onChange={e => setPassword(e.target.value)} />
                        <small id="passcheck" className="form-text invalid-feedback">
                            Please fill the password
                        </small>
                    </div>
                    <br />

                    <input type="submit" id="submitbtn" value="Submit" className="btn btn-primary" />
                </form>
            </div>
            <AutoHideToast title={"Login Error"} body={"Invalid Credentials"} showState={toastState} onCloseCallback={() => setToastState(false)} />
        </div>
    );
}

export default Login;