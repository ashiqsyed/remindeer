import "../LoginPage.css"
import {useRouter} from "next/navigation";
import Link from "next/link"
import {useState} from "react"

const LoginForm = (props) => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    function handleLogin(event) {
        event.preventDefault();
        props.onLoginClick();
        const existingUser = {
            username: username,
            password: password
        }
        

        setUsername("");
        setPassword("");

        // console.log(existingUser);

        // router.push("/reminders", {query: {loggedIn: "true"}});
        // router.push("/reminders");
        // console.log(`user is logged in: ${props.loggedIn} (in loginform.js)`);

    }
    return (
        <form className="login-form" onSubmit={handleLogin}>
            <input type="text" placeholder="Username" onChange={handleUsernameChange} value={username}/>
            <input type="password" placeholder="Password" onChange={handlePasswordChange} value={password}/>
            <div className="button-container">
                <button className="login-button" type="submit">Log in</button>
                {/* <button>
                    <Link href={{
                        pathname: "/reminders",
                        query: {loggedIn: "true"}
                        }}
                    >
                        Log in
                    </Link>
                </button> */}
            </div>
        </form>
            
    );
}

export default LoginForm