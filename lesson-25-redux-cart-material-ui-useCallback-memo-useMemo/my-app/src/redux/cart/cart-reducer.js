import { ADD_TO_CART, INSREASE_COUNT_IN_CART, DESREASE_COUNT_IN_CART } from "./cart-types";

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
        case DESREASE_COUNT_IN_CART:
            const descreaseStore = store.map(item => ({...item}));
            const descreaseProduct = descreaseStore.find(item => item.id === payload);
            descreaseProduct.count -= 1;
            if(!descreaseProduct.count) {
                return descreaseStore.filter(item => item.id !== payload);
            }
            return descreaseStore;
        default:
            return store;
    }
}

export default cartReducer;