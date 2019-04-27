import React from "react"
import styled from "@emotion/styled"

import Firebase from "../../firebase/Firebase"
import { Button } from "../../emotion/Buttons"

const AuthWrapper = styled.div`
	padding: 50px 0;
	text-align: center;
`

const AuthForm = () => {
	const firebase = new Firebase()

	const login = (e) => {
		e.preventDefault()

		firebase
			.loginUser()
			.then(() => {
				console.log("Success")
			})
			.catch((err) => {
				console.error(err)
			})
	}

	return (
		<AuthWrapper>
			<Button onClick={(e) => login(e)} type="button">
				Login with Google
			</Button>
		</AuthWrapper>
	)
}

export default AuthForm
