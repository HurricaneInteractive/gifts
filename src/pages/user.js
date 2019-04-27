import React, { useContext, useEffect, useState } from "react"
import styled from "@emotion/styled"
import AppContext from "../store/AppContext"
import Gift from "../firebase/Gift"

import Layout from "../components/layout"
import Card from "../components/Card"

import { Container } from "../emotion/Wrappers"
import { Primary, Black, White } from "../emotion/colours"
import { rem } from "../emotion/mixins"
import { Button } from "../emotion/Buttons"

const User = () => {
	const { user, gifts } = useContext(AppContext)
	const [giftData, setGiftData] = useState(gifts)
	const [loading, setLoading] = useState(true)
	const GiftHelper = new Gift()

	useEffect(() => {
		let unsubscribe = () => {}
		const updateGiftState = (snap) => {
			const data = []
			snap.forEach((doc) => {
				data.push({
					...doc.data(),
					id: doc.id,
				})
			})

			setGiftData(data)
			setLoading(false)
		}

		if (user) {
			unsubscribe = GiftHelper.retrieveGiftDataRealtime(user.uid, (snap) => {
				updateGiftState(snap)
			})
		}

		return () => {
			if (typeof unsubscribe === "function") {
				unsubscribe()
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])

	const renderGiftData = () => (
		<UserWishlist>
			{giftData && giftData.length > 0 ? (
				<>
					{giftData.map((item, i) => (
						<Card data={item} key={i} />
					))}
				</>
			) : (
				<h2>No Items Added!</h2>
			)}
		</UserWishlist>
	)

	return (
		<Layout>
			<Container id={user.uid}>
				{/* <UserProfile>
					<img src={user.photoURL} />
				</UserProfile> */}
				<UserHeader>
					<UserImage style={{ backgroundImage: `url('${user.photoURL}')` }}>
						<div />
					</UserImage>

					<MetaData>
						<div>
							<h1>{user.providerData[0].displayName}</h1>
						</div>
						<h2>{user.providerData[0].email}</h2>
						<Stats>
							<li>
								<span>20</span> items
							</li>
							<li>
								<span>0</span> friends
							</li>
							<li>
								<span>0</span> friends
							</li>
						</Stats>

						<Button>Send Friend Request</Button>
					</MetaData>
				</UserHeader>

				{renderGiftData()}
			</Container>
		</Layout>
	)
}

export default User

const UserHeader = styled.div`
	display: flex;
	min-height: 360px;
	width: 100%;
	align-items: center;
`
const MetaData = styled.div`
	margin: 0 48px;
`
const Stats = styled.ul`
	list-style: none;
	display: flex;
	padding: 0;
	li {
		margin: 0 16px 0 0;
		font-size: ${rem(14)};
		span {
			font-weight: bold;
			font-size: ${rem(16)};
		}
	}
`

const UserImage = styled.div`
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	border-radius: 100%;
	background-color: ${Black};
	position: relative;
	width: 77px;
	height: 77px;
	border: 4px solid ${Primary};
	@media (min-width: 767px) {
		width: 124px;
		height: 124px;
	}
	@media (min-width: 1039px) {
		width: 172px;
		height: 172px;
	}
	> div {
		width: 100%;
		height: 100%;
		border-radius: 100%;
		border: 8px solid ${Black};
		&:before {
			content: "";
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
`
const UserWishlist = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 16px;
	margin: 0;
	padding: 24px 0;
	border-top: 1px solid ${White};
	@media (min-width: 767px) {
		grid-template-columns: repeat(2, 1fr);
		padding: 24px 16px;
	}
	@media (min-width: 1039px) {
		grid-template-columns: repeat(3, 1fr);
	}
	h2 {
		text-align: center;
		grid-area: 1 / 2;
	}
`
