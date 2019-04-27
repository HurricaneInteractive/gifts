import React, { useState, useContext } from "react"
import styled from "@emotion/styled"
import AppContext from "../../store/AppContext"
import Gift from "../../firebase/Gift"

import { Black, Grey, White, Primary } from "../../emotion/colours"
import { trans } from "../../emotion/mixins"
import { Input } from "../../emotion/Inputs"
import { IconExit } from "../../emotion/Icons"
import { Button } from "../../emotion/Buttons"

const AddItem = ({ isOpen, viewToggle }) => {
	// insert hooks here :100:
	const { user } = useContext(AppContext)
	const [formData, setFormData] = useState({
		productName: "",
		productURL: "",
		productImage: "",
	})

	const updateFormData = (event) =>
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		})

	const { productName, productURL, productImage } = formData
	if (!isOpen) {
		return null
	}

	const HandleAddItem = () => {
		let allFormData = {
			product_name: productName,
			product_url: productURL,
			product_image: productImage,
		}
		console.log("allFormData", allFormData)
		console.log("user.uid", user.uid)

		const giftItem = new Gift()
		giftItem
			.saveGiftData(user.uid, {
				title: productName,
				url: productURL,
				image: productImage,
			})
			.then((res) => {
				console.log(res)
				viewToggle()
			})
			.catch((err) => console.log(err))
	}

	return (
		<AddItemLayout>
			<div>
				<Exit onClick={viewToggle}>
					<IconExit />
				</Exit>
				<AddItemContainer>
					<ImagePreview
						className={productImage ? "hasImage" : null}
						style={{ backgroundImage: `url('${productImage}')` }}
					/>
					<InputContainer>
						<div>
							<InputItem>
								<label>Product Title</label>
								<Input
									name="product_name"
									value={productName}
									name="productName"
									onChange={(e) => updateFormData(e)}
									placeholder="Product Name"
								/>
							</InputItem>
							<InputItem>
								<label>Product URL</label>
								<Input
									name="product_url"
									value={productURL}
									name="productURL"
									onChange={(e) => updateFormData(e)}
									placeholder="https://product_url.com/product_id"
								/>
							</InputItem>
						</div>
						<div>
							<InputItem>
								<label>Product Image</label>
								<Input
									name="product_image_url"
									value={productImage}
									name="productImage"
									onChange={(e) => updateFormData(e)}
									placeholder="Product Image"
								/>
							</InputItem>
						</div>
					</InputContainer>
				</AddItemContainer>
				<Button className="add_item_submit" onClick={HandleAddItem}>
					Add Item
				</Button>
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
const Exit = styled.div`
	position: absolute;
	top: 16px;
	right: 16px;
	background-color: transparent;
	fill: ${Grey};
	width: 100%;
	height: 100%;
	max-height: 16px;
	max-width: 16px;
	cursor: pointer;
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
		position: relative;
		.add_item_submit {
			float: right;
		}
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
	width: 248px;
	height: 248px;
	background-color: ${Grey};
	position: relative;
	overflow: hidden;
	background-size: contain;
	background-position: center center;
	background-repeat: no-repeat;
	&.hasImage {
		&:after {
			content: "";
		}
	}
	&:after {
		content: "No Image";
		color: ${Black};
		position: absolute;
		top: 50%;
		line-height: 0;
		width: 100%;
		text-align: center;
	}
`
