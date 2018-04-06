
export const listingCreate = newListing => ({type: 'LISTING_CREATE', payload: newListing})

export const redirectToAuction = auctionId => ({ type: 'AUCTION_REDIRECT', payload: auctionId })

export const setLoginSession = loggedInUser => ({type: 'SET_LOGIN_SESSION', payload: loggedInUser})

export const clearLoginSession = logOutUser => ({type: 'CLEAR_LOGIN_SESSION', payload: logOutUser})
