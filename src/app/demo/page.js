import LoginPage from "../components/LoginPage"
import Dashboard from "../components/Dashboard/Dashboard.js"
import Nav from "../components/Nav"
import AddReminder from "../components/Dashboard/AddReminder"

export default function Home() {
    return (
        <div>
            <Nav />
            <Dashboard />
        </div>

    )
}