import LoginPage from "./components/LoginPage"
import Nav from "./components/Nav"
import "./globals.css"
export default function Home() {
  return (
    <div className="app-container">
      <Nav />

      <LoginPage />
    </div>
    
  );
}
