import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// Pages
import Index from "./pages/index"
import User from "./pages/user"
import Auth from "./pages/auth"

function App() {
	return (
		<Router className="App">
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/auth">Login</Link>
					</li>
					<li>
						<Link to="/user">User</Link>
					</li>
				</ul>
			</nav>
			<Route path="/" exact component={Index} />
			<Route path="/user" exact component={User} />
			<Route path="/auth" exact component={Auth} />
		</Router>
	)
}

export default App
