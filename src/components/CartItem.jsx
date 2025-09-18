import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, IconButton, TextField, Card, CardContent, CardMedia, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export default function CartItem({ item, onUpdateQty, onRemove }) {
  // Handle manual input change
  const handleQtyChange = (e) => {
    const value = parseInt(e.target.value || '1', 10)
    if (value >= 1) {
      onUpdateQty(item.id, value)
    }
  }

  // Handle increment/decrement
  const increment = () => onUpdateQty(item.id, item.qty + 1)
  const decrement = () => {
    const newQty = item.qty - 1
    if (newQty >= 1) {
      onUpdateQty(item.id, newQty)
    } else {
      onRemove(item.id) // remove if quantity goes below 1
    }
  }

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1, mb: 2 }}>
      <CardMedia
        component="img"
        image={item.image}
        alt={item.title}
        sx={{ width: 100, objectFit: 'contain', p: 1 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1">{item.title}</Typography>
        <Typography variant="body2">${item.price.toFixed(2)}</Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <Button variant="outlined" onClick={decrement}>-</Button>
          <TextField
            size="small"
            label="Qty"
            type="number"
            inputProps={{ min: 1 }}
            value={item.qty}
            onChange={handleQtyChange}
            sx={{ width: 80 }}
          />
          <Button variant="outlined" onClick={increment}>+</Button>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={() => onRemove(item.id)}
          >
            Remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    qty: PropTypes.number.isRequired
  }).isRequired,
  onUpdateQty: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}
