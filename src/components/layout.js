import React from "react"
import styled from "@emotion/styled"
import { Black } from "../emotion/colours"

const Layout = ({ children }) => (
	<LayoutContainer>
		<main className="container">{children}</main>
	</LayoutContainer>
)

export default Layout

const LayoutContainer = styled.div`
	background-color: ${Black};
`
