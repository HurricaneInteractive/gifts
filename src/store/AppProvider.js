import React, { Component } from "react"
import PropTypes from "prop-types"

import AppContext from "./AppContext"
import Firebase from "../firebase/Firebase"

export default class AppProvider extends Component {
	firebase = new Firebase()

	authListner = null

	state = {
		user: null,
		authLoading: true,
		gifts: null,
	}

	componentDidMount = () => {
		this.authListner = this.firebase.auth.onAuthStateChanged((user) => {
			this.setUserData(user)
		})
	}

	componentWillUnmount = () => {
		this.authListner = null
	}

	setUserData = (user) => {
		this.setState({
			user,
			authLoading: false,
		})
	}

	render = () => {
		const { children } = this.props
		const methods = {
			setUserData: (user) => this.setUserData(user),
		}

		return (
			<AppContext.Provider value={{ ...this.state, ...methods }}>
				{children}
			</AppContext.Provider>
		)
	}
}

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
}
