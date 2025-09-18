import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { Card, CardMedia, CardContent, Typography, CardActions, Button, TextField, IconButton, Box } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { CartContext } from '../context/CartContext'


export default function ProductCard({ product }) {
    const [qty, setQty] = useState(1)
    const { addToCart } = useContext(CartContext)


    const changeQty = (next) => {
        setQty(prev => Math.max(1, Number.isNaN(next) ? prev : next))
}


    const increment = () => setQty(q => q + 1)
    const decrement = () => setQty(q => Math.max(1, q - 1))


    return (
        <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia component="img" height="200" image={product.image} alt={product.title} sx={{ objectFit: 'contain', p: 2 }} />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="subtitle1" gutterBottom>{product.title}</Typography>
                <Typography variant="body2" color="text.secondary">${product.price.toFixed(2)}</Typography>
            </CardContent>
            <CardActions>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton aria-label="decrement" onClick={decrement}><RemoveIcon /></IconButton>
                    <TextField size="small" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 1 }} value={qty} onChange={(e) => changeQty(parseInt(e.target.value || '1', 10))} sx={{ width: 80 }} />
                    <IconButton aria-label="increment" onClick={increment}><AddIcon /></IconButton>
                </Box>
                <Button variant="contained" onClick={() => addToCart(product, qty)}>Add To Cart</Button>
            </CardActions>
        </Card>
    )
}


ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string
    }).isRequired
}