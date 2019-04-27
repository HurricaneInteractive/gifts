const trans = (sec) => `
  transition: all ${sec ? sec : 0.3}s ease;
`
const rem = (size) => `${size / 16}rem`

const user_select = (type) =>
	`user-select: ${type};
  -webkit-user-select: ${type};
  -ms-user-select: ${type};`

export { trans, rem, user_select }
