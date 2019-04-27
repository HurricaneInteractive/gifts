import React from "react"
import styled from "@emotion/styled"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AppProvider from "./store/AppProvider"
import AppContext from "./store/AppContext"

// Pages
import Index from "./pages/index"
import User from "./pages/user"
import Auth from "./pages/auth"
import Navigation from "./components/Navigation"
import { Black } from "./emotion/colours"

const AuthedRoute = () => {
	return (
		<>
			<Route path="/" exact component={Index} />
			<Route path="/user" exact component={User} />
		</>
	)
}

const DefaultRoutes = () => {
	return <Route component={Auth} />
}

const App = () => {
	return (
		<AppProvider>
			<Router className="App">
				<PageWrapper>
					<AppContext.Consumer>
						{({ user }) => (
							<>
								<Navigation user={user} />
								{user ? <AuthedRoute /> : <DefaultRoutes />}
							</>
						)}
					</AppContext.Consumer>
				</PageWrapper>
			</Router>
		</AppProvider>
	)
}

export default App

const PageWrapper = styled.div`
	background-color: ${Black};
	min-height: 100vh;
`
