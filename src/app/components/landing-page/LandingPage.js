import Nav from "../nav/Nav";
import logo from "../../../../public/Remindeer_PNG.png";
import Link from "next/link";
import "./landingpage.css";
const LandingPage = () => {
    return (
        <div className="landing-page-container">
            <Nav />
            <div className="landing-page">
                <div className="landing-img-container">
                    <img className="landing-page-img" src={logo.src} />
                </div>
                <div className="landing-text-container">
                    <h1>Remindeer</h1>
                    <p>Welcome to Remindeer!</p>
                    <p>With our application, you are able to create, view, update, and delete reminders.</p>
                </div>
                <div className="landing-button-container">
                    <Link className="login" href="/login">Log In</Link>
                    <Link className="signup" href="/signup">Sign Up</Link>
                </div> 
            </div>
        </div>
    );
}

export default LandingPage;