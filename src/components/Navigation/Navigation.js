import React, { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { White, Primary } from "../../emotion/colours"
import { Container } from "../../emotion/Wrappers"
import AppContext from "../../store/AppContext"

const Navigation = () => {
	const context = useContext(AppContext)
	const { user } = context

	return (
		<NavigationLayout as="nav">
			<NavLogo>
				<Link to="/">
					<svg
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="gift"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						className="svg-inline--fa fa-gift fa-w-16 fa-7x"
					>
						<path
							fill="currentColor"
							d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
						/>
					</svg>
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
