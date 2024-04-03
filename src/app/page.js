import LoginPage from "./components/LoginPage"
import Dashboard from "./components/Dashboard/Dashboard"
import AddReminder from "./components/Dashboard/AddReminder"
import "./globals.css"
export default function Home() {
  return (
    <div className="app-container">
      <LoginPage />
    </div>
    
  );
}
