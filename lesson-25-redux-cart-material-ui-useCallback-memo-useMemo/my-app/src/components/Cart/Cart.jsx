import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
// import { Typography, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";

import CartItem from './CartItem/CartItem';

import {increaseCountInCart} from "../../redux/cart/cart-actions";

import { selectCart } from '../../redux/cart/cart-selectors';

const Cart = ()=> {
    const items = useSelector(selectCart);
    const dispatch = useDispatch();

    const onIncreaseCart = useCallback(id => {
        dispatch(increaseCountInCart(id));
    }, [dispatch]);

    const elements = items.map(item => <CartItem key={item.id} {...item} onIncreaseCart={onIncreaseCart} />);

    return (
        <Box>
            <Typography variant='h5' gutterBottom>Cart</Typography>
            <Paper sx={{padding: "15px"}}>
                {elements}
            </Paper>
        </Box>
    )
};

export default Cart;