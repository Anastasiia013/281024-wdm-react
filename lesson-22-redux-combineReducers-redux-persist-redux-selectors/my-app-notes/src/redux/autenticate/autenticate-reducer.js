import { LOGIN } from "./autenticate-types";

const authenticateReducer = (store = false, action) => {
    switch(action.type) {
        case LOGIN:
            return true;
        default:
            return store;
    }
}

export default authenticateReducer;