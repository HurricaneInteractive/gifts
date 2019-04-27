import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { White, Primary } from "../../emotion/colours"
import { Container } from "../../emotion/Wrappers"
import { IconLogo } from "../../emotion/Icons"
import Firebase from "../../firebase/Firebase"

const Navigation = ({ user }) => {
	const firebase = new Firebase()

	const logout = (e) => {
		e.preventDefault()

		// eslint-disable-next-line no-alert
		firebase.logoutUser().then(() => alert("Signed Out Successfully"))
	}

	return (
		<NavigationLayout as="nav">
			<NavLogo>
				<Link to="/">
					<IconLogo />
				</Link>
			</NavLogo>
			<ul>
				{user ? (
					<>
						<li>
							<Link to="/user">Profile</Link>
						</li>
						<li>
							<a href="#logout" onClick={(e) => logout(e)}>
								Sign Out
							</a>
						</li>
					</>
				) : (
					false
				)}
			</ul>
		</NavigationLayout>
	)
}

export default Navigation

Navigation.defaultProps = {
	user: null,
}

Navigation.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	user: PropTypes.object,
}

const NavigationLayout = styled(Container)`
	display: flex;
	justify-content: space-between;
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		justify-self: flex-end;
		justify-content: flex-end;
		li {
			padding: 16px 16px;
			a {
				color: ${Primary};
				text-decoration: none;
				&:hover {
					color: ${White};
				}
			}
		}
	}
`
const NavLogo = styled.div`
	padding: 16px 8px;
	a {
		display: block;
		svg,
		path {
			height: 100%;
			width: 100%;
			max-height: 48px;
			fill: ${Primary};
		}
	}
`
