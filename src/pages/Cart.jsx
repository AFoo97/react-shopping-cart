import React, { useContext } from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import { CartContext } from '../context/CartContext'
import CartItem from '../components/CartItem'


export default function Cart() {
    const { items, updateQty, removeFromCart, clearCart } = useContext(CartContext)


    const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)


    return (
        <Container className="container">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4">Your Cart</Typography>
                {items.length === 0 ? (
                    <Typography variant="body1" sx={{ mt: 2 }}>Your cart is empty.</Typography>
                ) : (
                    <>
                        <Box sx={{ mt: 2 }}>
                            {items.map(it => (
                            <CartItem key={it.id} item={it} onUpdateQty={updateQty} onRemove={removeFromCart} />
                            ))}
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="h6">Subtotal: ${subtotal.toFixed(2)}</Typography>
                            <Button variant="contained" sx={{ mt: 1 }} onClick={clearCart}>Clear Cart</Button>
                        </Box>
                    </>
                )}
            </Box>
        </Container>
    )
}