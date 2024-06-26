// import "../LoginPage.css"
import {useRouter} from "next/navigation";
import {useState, useContext} from "react"
import UserContext from "../../context/UserContext";
import axios from 'axios';
import "./SignUpPage.css"

const SignUpForm = (props) => {
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const { userData, setUserData } = useContext(UserContext);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    
    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const user = {
                username: username,
                password: password,
                email: email
            }
            console.log("We are attempting to create account");
            await axios.post('http://localhost:1234/api/users/signup', user);

            const loginRes = await axios.post('http://localhost:1234/api/users/login', {
                username: username,
                password: password,
            });
            console.log(loginRes.data.user);

            setUserData( {
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            
            localStorage.setItem("auth-token", loginRes.data.token);
            console.log("We have logged in");
            //push User to main page
            router.push('/reminders');
        } 
        catch (err) {
            console.log(err);
            if (err.response.data.msg === "Please enter a username, email, and a password.") {
                alert("You must enter in a username, password, and an email.");
            } else if (err.response.data.msg === "Already existing username") {
                alert("There is already an account with this username.");
            } else if (err.response.data.msg === "Already existing email") {
                alert("There is already an account with this email.");
            } else if (err.response.data.msg === "Password must be greater than 6 characters!") {
                alert("Your password must be greater than 6 characters.");
            }
        }
    }
    return (
        <form className="signup-form" onSubmit={handleSignup}>
            <input className="username" type="text" placeholder="Username" onChange={handleUsernameChange} value={username}/>
            <input className="password" type="password" placeholder="Password" onChange={handlePasswordChange} value={password}/>
            <input className="email" type="email" placeholder="thisismyemail@gmail.com" onChange={handleEmailChange} value={email}/>

            <div className="button-container">
                <button className="signup-button" type="submit">Sign Up</button>

            </div>
            
        </form>
    )
}

export default SignUpForm