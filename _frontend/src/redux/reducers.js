
const initialState = {
    listings: [],
    viewItems: [{}]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("VIEW_ITEM"):
            state = {
                ...state,
                viewItems: action.payload
            }
            break;

    }
    
    return state;
}

export default rootReducer