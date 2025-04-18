import { ADD_TO_CART, INSREASE_COUNT_IN_CART } from "./cart-types";

const cartReducer = (store = [], {type, payload})=> {
    switch(type) {
        case ADD_TO_CART:
            const newStore = store.map(item => ({...item}));
            const product = newStore.find(item => item.id === payload.id);
            if(product) {
                product.count += 1;
                return newStore;
            }
            // newStore.push({...payload, count: 1});
            // return newStore;
            return [...newStore, {...payload, count: 1}];
        case INSREASE_COUNT_IN_CART:
            const updateStore = store.map(item => ({...item}));
            const updateProduct = updateStore.find(item => item.id === payload);
            updateProduct.count += 1;
            return updateStore;
        default:
            return store;
    }
}

export default cartReducer;