import React from "react"
import styled from "@emotion/styled"
import { Black, Grey, White, Primary } from "../../emotion/colours"
import { trans } from "../../emotion/mixins"
import { Input } from "../../emotion/Inputs"
import { Button } from "../../emotion/Buttons"

const AddItem = ({ isOpen }) => {
	// insert hooks here :100:
	// const FormData = useState(form_state)
	// const addNewGift = new Gift()
	if (!isOpen) {
		return null
	}

	return (
		<AddItemLayout>
			<div>
				<form>
					<AddItemContainer>
						<ImagePreview>
							{/* <img src="https://scontent-syd2-1.cdninstagram.com/vp/9d85625996acaaad27855b4449e323c6/5D6C2F8F/t51.2885-15/e35/57156421_2614198495320819_5294878624925435158_n.jpg?_nc_ht=scontent-syd2-1.cdninstagram.com" /> */}
						</ImagePreview>
						<InputContainer>
							<div>
								<InputItem>
									<label>Product Title</label>
									<Input placeholder="Product Name" />
								</InputItem>
								<InputItem>
									<label>Product URL</label>
									<Input placeholder="https://product_url.com/product_id" />
								</InputItem>
							</div>
							<div>
								<InputItem>
									<label>Product Image</label>
									<Input placeholder="Product Image" />
								</InputItem>
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

const InputItem = styled.div`
	display: block;
	position: relative;
	margin: 0 0 8px;
	label {
		position: relative;
		top: 50%;
		left: 16px;
		pointer-events: none;
		display: none;
	}
	input {
		width: auto;
		border: 1px solid ${White};
		background-color: ${Black};
		margin: 0;
		color: ${White};
		&::placeholder {
			color: rgba(200, 200, 200, 0.7);
		}
		&:focus + label {
			top: 0px;
			background-color: ${Black};
		}
	}
`

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
		max-width: 80vw;
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
	grid-template-columns: 0.4fr 0.6fr;
`
const InputContainer = styled.div`
	padding: 0 8px 0 16px;
	div {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}
`

const ImagePreview = styled.div`
	display: block;
	width: 100%;
	min-width: 248px;
	min-height: 248px;
	background-color: ${Grey};
	position: relative;
	&:after {
		content: "No Image";
		color: ${Black};
		position: absolute;
		top: 50%;
		line-height: 0;
		width: 100%;
		text-align: center;
	}
	img {
		width: 100%;
		margin: 0;
	}
`
