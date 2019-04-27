import React from "react"
import styled from "@emotion/styled"
import { Black, Grey, White, Primary } from "../../emotion/colours"
import { Trans } from "../../emotion/mixins"

const Card = ({ data }) => {
	return (
		<CardLayout>
			{data.image ? (
				<CardImageWrapper>
					<img src={data.image} />
				</CardImageWrapper>
			) : null}
			<h3>{data.title}</h3>
			<h6>{data.category}</h6>
			<a href={data.url} target="_blank">
				View Item
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
	${Trans};
	&:hover {
		${Trans};
		border: 2px solid ${Primary};
	}
	a {
		justify-self: flex-end;
		width: auto;
		text-align: right;
		text-decoration: none;
		color: ${Primary};
		cursor: pointer;
		&:hover {
			color: ${White};
		}
	}
`
const CardImageWrapper = styled.div`
	width: 100%;
	display: block;
	img {
		width: 100%;
	}
`
