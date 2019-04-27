import React, { useContext, useEffect, useState } from "react"
import styled from "@emotion/styled"
import AppContext from "../store/AppContext"
import Gift from "../firebase/Gift"

import Layout from "../components/layout"
import Card from "../components/Card"
import Toast from "../components/Toast"
import AddItem from "../components/AddItem"

import { Container } from "../emotion/Wrappers"
import { Input } from "../emotion/Inputs"
import { Button } from "../emotion/Buttons"
import { White } from "../emotion/colours"
import Loading from "../emotion/Loading"

const Index = () => {
	const { user, gifts } = useContext(AppContext)
	const [giftData, setGiftData] = useState(gifts)
	const [isAddItemOverlay, setaddItemOpen] = useState(false)
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

	const renderGiftData = () => {
		return loading ? (
			<Loading />
		) : (
			<CardContainer>
				{giftData && giftData.length > 0 ? (
					<>
						{giftData.map((item, i) => (
							<Card data={item} key={i} />
						))}
					</>
				) : (
					<h2>No Items Added!</h2>
				)}
			</CardContainer>
		)
	}

	const toggleAddItem = () => {
		isAddItemOverlay ? setaddItemOpen(false) : setaddItemOpen(true)
	}

	return (
		<Layout>
			<Container>
				<SearchHeader>
					<h1>Get the gifts you actually want</h1>
					<div>
						<SearchInput type="text" placeholder="Paste URL" />
						<Button onClick={toggleAddItem}>Add</Button>
					</div>
				</SearchHeader>
				<AddItem isOpen={isAddItemOverlay} viewToggle={toggleAddItem} />
				<Toast props={"hello"} />
				{renderGiftData()}
			</Container>
		</Layout>
	)
}

export default Index

const SearchInput = styled(Input)`
	/* margin: 0 auto; */
`

const SearchHeader = styled.div`
	display: flex;
	justify-content: center;
	height: 240px;
	align-items: center;
	flex-direction: column;
	h1 {
		margin: 0 0 18px;
	}
`

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 16px;
	margin: 36px 0;
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
