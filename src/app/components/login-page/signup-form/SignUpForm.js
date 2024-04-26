import "../LoginPage.css"
import {useRouter} from "next/navigation";
import {useState, useContext} from "react"
import UserContext from "../../../context/UserContext";
import axios from 'axios';


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
            alert("Please enter a username and a password.")
        }
    }
    return (
        <form className="signup-form" onSubmit={handleSignup}>
            <input type="text" placeholder="Username" onChange={handleUsernameChange} value={username}/>
            <input type="password" placeholder="Password" onChange={handlePasswordChange} value={password}/>
            <input type="email" placeholder="thisismyemail@gmail.com" onChange={handleEmailChange} value={email}/>

            <div className="button-container">
                <button className="signup-button" type="submit">Sign Up</button>

            </div>
            
        </form>
    )
}

export default SignUpForm