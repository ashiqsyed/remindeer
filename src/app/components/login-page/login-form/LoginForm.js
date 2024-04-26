import "../LoginPage.css"
import {useRouter} from "next/navigation";
import Link from "next/link"
import {useState, useEffect, useContext} from "react"
import axios from 'axios';
import UserContext from "../../../../../context/UserContext";


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
    const {userData, setUserData} = useContext(UserContext);

    //const userData = useContext(UserContext);
    //const setUserData = useContext(UserContext);

    console.log(userData);

    useEffect( () => {
        //auto push the user to main screen if they are logged in
        if (userData.token) {
            router.push('/reminders');
        }
    }, [userData.token, router]);

    function handleLogin(event) {
        event.preventDefault();
        if (username === '' || password === '') {
            alert("Both username and password must be entered.")
        } else {
            props.onLoginClick();
            const existingUser = {
                username: username,
                password: password
            }
            
            // console.log("existing user: ");
            // console.log(existingUser);
    
            setUsername("");
            setPassword("");
        }

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