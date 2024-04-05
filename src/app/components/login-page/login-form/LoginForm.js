import "../LoginPage.css"
import {useRouter} from "next/navigation";

const LoginForm = (props) => {
    const router = useRouter();
    function handleLogin() {
        router.push("/reminders", {query: {loggedIn: "true"}});
        props.onLoginClick();
    }
    return (
        <div className="login-form">
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <div className="button-container">
                <button className="login-button" onClick={handleLogin}>Log in</button>
            </div>
        </div>
            
    );
}

export default LoginForm