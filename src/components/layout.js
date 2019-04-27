import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import AppContext from "../store/AppContext"
import { Black } from "../emotion/colours"
import Loading from "../emotion/Loading"

const Layout = ({ children }) => {
	const { user, authLoading } = useContext(AppContext)

	return (
		<LayoutContainer>
			<main>{authLoading ? <Loading /> : <>{children}</>}</main>
		</LayoutContainer>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout

const LayoutContainer = styled.div`
	background-color: ${Black};
`
