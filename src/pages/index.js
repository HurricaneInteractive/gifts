import React, { useContext, useEffect, useState } from "react"
import styled from "@emotion/styled"
import AppContext from "../store/AppContext"
import Gift from "../firebase/Gift"

import Layout from "../components/layout"
import Card from "../components/Card"
import AddItem from "../components/AddItem"
import { Container } from "../emotion/Wrappers"
import { Input } from "../emotion/Inputs"
import { Button } from "../emotion/Buttons"
import Loading from "../emotion/Loading"

const Index = () => {
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

	console.log("gift data", giftData)

	return (
		<Layout>
			<Container>
				<SearchHeader>
					<SearchInput type="text" placeholder="add url" />
					<Button>Add</Button>
				</SearchHeader>
				<AddItem isOpen={true} />
				{loading ? (
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
							<h2>No Data Found!</h2>
						)}
					</CardContainer>
				)}
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
`

const CardContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 33%);
`
