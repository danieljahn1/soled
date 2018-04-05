export const setViewItem = viewItem => ({type: 'VIEW_ITEM', payload: viewItem})

export const listingCreate = newListing => ({type: 'LISTING_CREATE', payload: newListing})

export const setLoginSession = loggedInUser => ({type: 'SET_LOGIN_SESSION', payload: loggedInUser})



// export const userCreate = newUser => ({type: 'USER_CREATE', payload: newUser})
// export const userAuth = logInUser => ({type: 'USER_AUTH', payload: logInUser})
// export const userLogOut = logOutUser => ({type: 'USER_LOG_OUT', payload: logOutUser})
// export const userLogIn = logInUser => ({type: 'USER_LOG_IN' , payload: logInUser})