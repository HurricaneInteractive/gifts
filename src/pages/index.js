import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Card from "../components/Card"
import AddItem from "../components/AddItem"
import { Container } from "../emotion/Wrappers"
import { Input } from "../emotion/Inputs"
import { Button } from "../emotion/Buttons"

const data = {
	title: "Test Item",
	category: "car",
	url: "https://google.com.au",
	id: "1234",
	claimed: false,
	claimedBy: "uid",
	createdAt: "date",
	image:
		"https://scontent-syd2-1.cdninstagram.com/vp/cf682f659c38a0be7148aa460a5dd4c5/5D5C33FF/t51.2885-15/e35/58409451_312595299420061_4420945992411625535_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com",
}
// "https://scontent-syd2-1.cdninstagram.com/vp/9d85625996acaaad27855b4449e323c6/5D6C2F8F/t51.2885-15/e35/57156421_2614198495320819_5294878624925435158_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com",
// "https://scontent-syd2-1.cdninstagram.com/vp/9ddb5bf0a6bb657cea710942cf5032e1/5D5774DE/t51.2885-15/e35/57840103_149009412806042_382302677955532816_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com",

const Index = () => (
	<Layout>
		<Container>
			<SearchHeader>
				<SearchInput type="text" placeholder="add url" />
				<Button>Add</Button>
			</SearchHeader>
			{/* <CardContainer>
				<Card data={data} />
			</CardContainer> */}
			<AddItem isOpen={false} />
		</Container>
	</Layout>
)

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
