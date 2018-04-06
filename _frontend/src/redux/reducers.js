
const initialState = {
    viewItems: [{}],
    loggedInUser: '',
    eventLastViewed: ""
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
            break;
        case ("AUCTION_REDIRECT"):
            state = {
                ...state,
                eventLastViewed: action.payload
            }
            break;
        case ("CLEAR_LOGIN_SESSION"):
            state = {
                loggedInUser: action.payload
            }
            break;
    }
    
    return state;
}

export default rootReducer;