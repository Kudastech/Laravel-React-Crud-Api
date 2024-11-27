// import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Register() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const { setUser, setToken } = useStateContext();
    const Submit = (ev) => {
        ev.preventDefault();

        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        axiosClient.post("/register", payload).then(({ data }) => {
            setUser(data.user);
            setToken(data.token);
            toast.success("Registration successful! Welcome to our platform.");
        }).catch(err => {
            const response = err.response;
            if(response && response.status === 422){
                const errorMessages = Object.values(response.data.errors).flat().join(", ");
                // Show error message
                toast.error(`Error: ${errorMessages}`);
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        });
    };


    return (
        <div className="login-signup-form animated fadeinDown">
            <div className="form">
                <h1 className="title">Create A New Account</h1>
                <form onSubmit={Submit}>
                    <input ref={nameRef} type="name" placeholder="Name" />
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                    />
                    <button className="btn btn-block">Register</button>
                    <p className="message">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}
