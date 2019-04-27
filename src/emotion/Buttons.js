import styled from "@emotion/styled"
import { Primary, White } from "./colours"

const Button = styled.div`
	border: none;
	appearance: none;
	border-radius: 3px;
	background: ${Primary};
	color: ${White};
	font-weight: bold;
	padding: 14px 30px;
	display: inline-block;
	cursor: pointer;
`

// eslint-disable-next-line import/prefer-default-export
export { Button }
