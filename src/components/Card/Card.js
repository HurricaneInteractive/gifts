import React from "react"
import styled from "@emotion/styled"
import { Black, Grey, White, Primary } from "../../emotion/colours"
import { trans, rem } from "../../emotion/mixins"
import { IconExternalLink } from "../../emotion/Icons"

const Card = ({ data }) => {
	return (
		<CardLayout>
			{data.image ? (
				<CardImageWrapper className={!data.image ? "no_image" : null}>
					<div style={{ backgroundImage: `url('${data.image}')` }} />
				</CardImageWrapper>
			) : null}
			<h3>{data.title}</h3>
			<a href={data.url} target="_blank">
				View Item
				<IconExternalLink />
			</a>
		</CardLayout>
	)
}

export default Card

const CardLayout = styled.div`
	background-color: ${Black};
	border: 2px solid ${Grey};
	padding: 8px;
	width: 100%;
	display: flex;
	flex-direction: column;
	${trans};
	&:hover {
		${trans};
		border: 2px solid ${Primary};
	}
	a {
		justify-self: flex-end;
		width: auto;
		text-align: right;
		text-decoration: none;
		color: ${Primary};
		text-transform: uppercase;
		margin: 4px;
		font-size: ${rem(12)};
		font-weight: 400;
		cursor: pointer;
		&:hover {
			color: ${White};
		}
		svg {
			margin: 0 0 0 4px;
			max-height: 12px;
			height: 100%;
		}
	}
`
const CardImageWrapper = styled.div`
	width: 100%;
	display: block;
	height: 240px;
	background-color: ${White};
	display: flex;
	justify-content: center;
	align-items: center;
	> div {
		width: calc(100% - 16px);
		height: calc(100% - 16px);
		background-size: contain;
		background-position: center center;
		background-repeat: no-repeat;
	}
`
