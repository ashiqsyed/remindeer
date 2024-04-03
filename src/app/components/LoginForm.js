import "./LoginPage.css"
import {useRouter} from "next/navigation";

const LoginForm = (props) => {
    const router = useRouter();
    function handleLogin(e) {
        // e.preventDefault()
        props.onLoginClick();
        router.push("/reminders")
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