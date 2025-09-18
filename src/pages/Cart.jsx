import React from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import { useCart } from '../context/useCart'
import CartItem from '../components/CartItem'

export default function Cart() {
  const { items, updateQty, removeFromCart, clearCart, totalItems, totalPrice } = useCart()

  return (
    <Container className="container">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4">Your Cart</Typography>

        {items.length === 0 ? (
          <Typography variant="body1" sx={{ mt: 2 }}>Your cart is empty.</Typography>
        ) : (
          <>
            <Box sx={{ mt: 2 }}>
              {items.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQty={updateQty}
                  onRemove={removeFromCart}
                />
              ))}
            </Box>

            <Box sx={{ mt: 2 }}>
              <Typography variant="h6">Total Items: {totalItems}</Typography>
              <Typography variant="h6">Total Price: ${totalPrice.toFixed(2)}</Typography>
              <Button variant="contained" sx={{ mt: 1 }} onClick={clearCart}>Clear Cart</Button>
            </Box>
          </>
        )}
      </Box>
    </Container>
  )
}
