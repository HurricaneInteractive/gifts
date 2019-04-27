import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { jsx } from "@emotion/core"
import styled from "@emotion/styled"
import { Black, Border, White, Primary } from "../../emotion/colours"

const Navigation = ({}) => {
	return (
		<NavigationLayout>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/auth">Login</Link>
				</li>
				<li>
					<Link to="/user">User</Link>
				</li>
			</ul>
		</NavigationLayout>
	)
}

export default Navigation

const NavigationLayout = styled.nav`
	width: 100%;
	ul {
		max-width: 1040px;
		margin: 0 auto;
		list-style: none;
		padding: 0;
		display: flex;
		justify-content: space-between;
		li {
			a {
				color: ${Primary};
			}
		}
	}
`
