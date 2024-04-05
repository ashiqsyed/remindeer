import "../LoginPage.css"
import {useRouter} from "next/navigation";

const SignUpForm = (props) => {
    const router = useRouter();
    function handleSignup() {
        router.push("/reminders")
    }
    return (
        <div className="signup-form">
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <input type="email" placeholder="thisismyemail@gmail.com"></input>

            <div className="button-container">
                <button className="signup-button" onClick={handleSignup}>Sign Up</button>

            </div>
            
        </div>
    )
}

export default SignUpForm