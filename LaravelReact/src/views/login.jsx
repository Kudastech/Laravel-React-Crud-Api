import { Link } from "react-router-dom";

export default function Login()
{
    const Submit = (ev) => {
        ev.preventDefault();
    }
        // const payload = {
        //     email: emailRef.current.value,
        //     password: passwordRef.current.value,
        // }
        // axiosClient.post("/login", payload).then(({ data }) => {
        //     setUser(data.user);
        //     setToken(data.token);
        // });

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
        </div>
    )
}
