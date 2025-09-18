import React from 'react';
import { IconButton, TextField, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../context/CartContext';


export default function CartItem({ item }) {
const { dispatch } = useCart();


const handleQuantityChange = (value) => {
if (value < 1) return;
dispatch({
type: 'UPDATE_ITEM',
payload: { id: item.id, quantity: value },
});
};


return (
<Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
<Typography>{item.title}</Typography>
<Box display="flex" alignItems="center">
<IconButton onClick={() => handleQuantityChange(item.quantity - 1)}>
<RemoveIcon />
</IconButton>
<TextField
type="number"
value={item.quantity}
onChange={(e) => handleQuantityChange(Number(e.target.value))}
slotProps={{
input: {
min: 1,
style: { textAlign: 'center', width: '60px' },
},
}}
/>
<IconButton onClick={() => handleQuantityChange(item.quantity + 1)}>
<AddIcon />
</IconButton>
<IconButton onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}>
<DeleteIcon />
</IconButton>
</Box>
</Box>
);
}