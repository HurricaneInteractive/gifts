import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Black } from "../emotion/colours"

const Layout = ({ children }) => (
	<LayoutContainer>
		<main className="container">{children}</main>
	</LayoutContainer>
)

Layout.propTypes = {
	children: PropTypes.element,
}

export default Layout

const LayoutContainer = styled.div`
	background-color: ${Black};
`
