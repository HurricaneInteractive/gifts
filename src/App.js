import React from "react"
import styled from "@emotion/styled"
import { BrowserRouter as Router, Route } from "react-router-dom"
import AppProvider from "./store/AppProvider"

// Pages
import Index from "./pages/index"
import User from "./pages/user"
import Auth from "./pages/auth"
import Navigation from "./components/Navigation"
import { Black } from "./emotion/colours"

function App() {
	return (
		<AppProvider>
			<Router className="App">
				<PageWrapper>
					<Navigation />
					<Route path="/" exact component={Index} />
					<Route path="/user" exact component={User} />
					<Route path="/auth" exact component={Auth} />
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
