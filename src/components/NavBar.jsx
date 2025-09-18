import React, { useContext } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Box, Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { CartContext } from '../context/CartContext'


export default function NavBar() {
    const { totalItems } = useContext(CartContext)


return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component={RouterLink} to="/" sx={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
                React Shop
            </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                <Button component={RouterLink} to="/" color="inherit">Home</Button>
                <Button component={RouterLink} to="/shop" color="inherit">Shop</Button>
                <Button component={RouterLink} to="/cart" color="inherit" startIcon={<Badge badgeContent={totalItems} color="secondary"><ShoppingCartIcon /></Badge>}>
                    Cart
                </Button>
            </Box>
        </Toolbar>
    </AppBar>
    )
}