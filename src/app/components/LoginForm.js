import "./LoginPage.css"

const LoginForm = () => {
    return (
        <div className="login-form">
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <div class="button-container">
                <input type="submit" value="Log In"></input>
            </div>
        </div>
            
    );
}

export default LoginForm