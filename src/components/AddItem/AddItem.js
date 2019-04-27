import React from "react"
import styled from "@emotion/styled"
import { Black, Grey, White, Primary } from "../../emotion/colours"
import { trans } from "../../emotion/mixins"
import { Input } from "../../emotion/Inputs"
import { Button } from "../../emotion/Buttons"

const AddItem = ({ isOpen }) => {
	return (
		<AddItemLayout>
			<div>
				<form>
					<AddItemContainer>
						<ImagePreview>
							<img src="https://scontent-syd2-1.cdninstagram.com/vp/9d85625996acaaad27855b4449e323c6/5D6C2F8F/t51.2885-15/e35/57156421_2614198495320819_5294878624925435158_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com" />
						</ImagePreview>
						<InputContainer>
							<div>
								<Input placeholder="Item Title" />
								<Input placeholder="Product URL" />
							</div>
							<div>
								<Input placeholder="image" />
							</div>
						</InputContainer>
					</AddItemContainer>
					<Button>Add Item</Button>
				</form>
			</div>
		</AddItemLayout>
	)
}

export default AddItem

const AddItemLayout = styled.div`
	background-color: rgba(200, 200, 200, 0.5);
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100vw;
	height: 100%;
	max-height: 100vh;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	${trans};
	> div {
		padding: 48px;
		min-width: 240px;
		min-height: 128px;
		background-color: ${Black};
		div {
			flex-direction: column;
			justify-content: center;
		}
	}
`

const AddItemContainer = styled.div`
	margin: 0 0 24px;
	display: grid;
	grid-template-columns: 0.3fr 0.7fr;
`
const InputContainer = styled.div`
	div {
		display: flex;
		justify-content: stretch;
		flex-direction: row;
	}
`

const ImagePreview = styled.div`
	display: block;
	width: 100%;
	min-width: 108px;
	min-height: 108px;
	background-color: ${Grey};
	img {
		width: 100%;
		margin: 0;
	}
`
