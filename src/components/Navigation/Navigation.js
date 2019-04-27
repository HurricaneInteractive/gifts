import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { White, Primary } from "../../emotion/colours"
import { Container } from "../../emotion/Wrappers"
import { IconLogo } from "../../emotion/Icons"
import AppContext from "../../store/AppContext"

const Navigation = () => {
	const context = useContext(AppContext)
	const { user } = context

	return (
		<NavigationLayout as="nav">
			<NavLogo>
				<Link to="/">
					<IconLogo />
				</Link>
			</NavLogo>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/user">User</Link>
				</li>
				{user ? (
					false
				) : (
					<li>
						<Link to="/auth">Login</Link>
					</li>
				)}
			</ul>
		</NavigationLayout>
	)
}

export default Navigation

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
