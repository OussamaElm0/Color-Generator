const addColor = (color) => ({
    type: 'add color',
    payload: color
})

const removeColor = (color) => ({
    type: 'remove color',
    payload: color
})

export { addColor, removeColor }