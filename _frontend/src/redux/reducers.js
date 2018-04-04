
const initialState = {
    viewItems: [{}],
    loggedInUser: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("VIEW_ITEM"):
            state = {
                ...state,
                viewItems: action.payload
            }
            break;
        case ("SET_LOGIN_SESSION"):
            state = {
                ...state,
                loggedInUser: action.payload
            }
    }
    
    return state;
}

export default rootReducer;