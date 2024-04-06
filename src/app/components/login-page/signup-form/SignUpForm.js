import "../LoginPage.css"
import {useRouter} from "next/navigation";
import {useState} from "react"

const SignUpForm = (props) => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    function handleSignup(event) {
        event.preventDefault();
        const newUser = {
            username: username,
            password: password,
            email: email
        }


        setUsername("");
        setPassword("");
        setEmail("");
        // router.push({
        //     pathname: "/reminders",
        //     query: {
        //         signup: "true",
        //         login: "true"
        //     }
        // })
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