import {UserActionsType} from './user.types'

const INITIAL_STATE = {
    currentUser: null   
}

const userReduer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionsType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}

export default userReduer ;
