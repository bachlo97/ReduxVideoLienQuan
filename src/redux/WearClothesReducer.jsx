const initialState = {
    
}


const wearClothesReducer = (state=initialState,action)=>{
    switch(action.type){
        case "GET_CLOTHES":
            state[action.kind] = action.img
            let test = {...state}
            console.log({test})
            return {...state}
    }

    return state
}

export default wearClothesReducer