import React, { useContext, useEffect, useState } from "react"
import styled from "@emotion/styled"

import { Black, Grey, White, Primary } from "../../emotion/colours"
import { IconExit } from "../../emotion/Icons"
import { trans, user_select } from "../../emotion/mixins"

const Toast = () => {
	const handleToastDelete = (e) => {
		console.log("delete ", e.target)
	}

	return (
		<ToastContainer>
			<ToastItem>
				Item Added
				<div onClick={(e) => handleToastDelete(e)}>
					<IconExit />
				</div>
			</ToastItem>
		</ToastContainer>
	)
}
export default Toast

const ToastContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const ToastItem = styled.div`
	background-color: ${Black};
	color: ${Primary};
	border: 1px solid ${Primary};
	max-width: 224px;
	margin: 0 auto;
	width: 100%;
	text-align: center;
	padding: 8px 4px;
	position: relative;
	bottom: 16px;
	${user_select("none")}
	cursor: default;
	&:hover {
		> div {
			opacity: 1;
			${trans(0.2)};
			&:hover {
				svg {
					fill: ${Grey};
				}
			}
		}
	}
	> div {
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
		width: 100%;
		max-width: 36px;
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0;
		cursor: pointer;
		${trans(0.2)};
		&:hover {
			svg {
				fill: ${Grey};
			}
		}
		svg {
			max-width: 16px;
			max-height: 16px;
			fill: ${Primary};
			width: 100%;
			height: 100%;
			pointer-events: none;
		}
	}
`
