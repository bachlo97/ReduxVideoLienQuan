let initialState = 'topclothes'

const chooseClothesTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FILTER_CLOTHES':
            state = action.payload
            return state
        default:
            return state
    }
}

export default chooseClothesTypeReducer;