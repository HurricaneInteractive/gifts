import React from "react"
import Layout from "../components/layout"
import AuthForm from "../components/AuthForm"

import { Container } from "../emotion/Wrappers"

const Auth = () => (
	<Layout>
		<Container>
			<AuthForm />
		</Container>
	</Layout>
)

export default Auth
