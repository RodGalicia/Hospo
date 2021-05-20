import api from "../utils/api";
import { useRef } from "react";
const Login = () => {
    const username = useRef();
    const password = useRef();
    const handleSubmit = async e => {
        e.preventDefault();
        const user = await api.login({
        username:username.current.value,
        password:password.current.value
        });
        console.log(user)
        // inputRef.current.value = "";
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="title">
                <h3>Login</h3>
            </div>
            <div className="field">
                <label>Username:</label>
                <input type="text" ref={username} name="username" />
                <br />
            </div>
            <div className="field">
                <label>Password:</label>
                <input type="password" ref={password} name="password" required />
            </div>
            <div className="field">
                <input className="submit-btn" type="submit" value="Submit" required />
            </div>
            <label id="error-message"></label>
        </form>
    )
}
export default Login