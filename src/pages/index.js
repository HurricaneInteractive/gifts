import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import { Container } from "../emotion/Wrappers"
import { Input } from "../emotion/Inputs"
import { Button } from "../emotion/Buttons"

const Index = () => (
	<Layout>
		<Container>
			<SearchHeader>
				<SearchInput type="text" placeholder="add url" />
				<Button>Add</Button>
			</SearchHeader>
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
