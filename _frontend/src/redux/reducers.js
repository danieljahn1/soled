
const initialState = {
    loggedInUser: '',
    auctionLastViewed: ""
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("SET_LOGIN_SESSION"):
            state = {
                ...state,
                loggedInUser: action.payload
            }
            break;
        case ("AUCTION_REDIRECT"):
            state = {
                ...state,
                auctionLastViewed: action.payload
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