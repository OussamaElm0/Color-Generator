const initState = {
    colors : []
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case 'add color':
            return {
                ...state,
                colors: [...state.colors, action.payload]
            }
        case 'remove color':
            return {
                ...state,
                colors: state.colors.filter(color => color !== action.payload)
            }
        default:
            return state
    }
}

export default reducer;