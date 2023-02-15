
const initialState = {
    users: [],
    cadenas: [],
}; 

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case "GET_ALL": return {...state, users: action.payload}
        case "GET_CADENAS": return {...state, cadenas: action.payload}
        default: return state;
    }
}

export default rootReducer;