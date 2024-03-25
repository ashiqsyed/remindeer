import "./LoginPage.css"

const SignUpForm = () => {
    return (
        <div className="signup-form">
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <input type="email" placeholder="thisismyemail@gmail.com"></input>

            <div className="button-container">
                <input type="submit" value="Sign Up"></input>

            </div>
            
        </div>
    )
}

export default SignUpForm