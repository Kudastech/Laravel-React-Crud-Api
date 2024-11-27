import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login()
{
    const emailRef = useRef();
    const passwordRef = useRef();
    const { setUser, setToken } = useStateContext();


    const Submit = (ev) => {
        ev.preventDefault();

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        axiosClient.post("/login", payload).then(({ data }) => {
            setUser(data.user);
            setToken(data.token);

            toast.success("Logged In successful! Welcome to our platform.");
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

    }

    return(
        <div className="login-signup-form animated fadeinDown">
            <div className="form">
                <h1 className="title">
                    Login To Your Account
                </h1>
                <form onSubmit={Submit}>
                <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={passwordRef} type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not Registered? <Link to= '/register'>Create a new account</Link>
                    </p>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}
