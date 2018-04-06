export const setViewItem = viewItem => ({type: 'VIEW_ITEM', payload: viewItem})

export const listingCreate = newListing => ({type: 'LISTING_CREATE', payload: newListing})

export const setLoginSession = loggedInUser => ({type: 'SET_LOGIN_SESSION', payload: loggedInUser})

export const clearLoginSession = logOutUser => ({type: 'CLEAR_LOGIN_SESSION', payload: logOutUser})
