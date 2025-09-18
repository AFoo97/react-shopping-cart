import React from 'react'
import { Container, Typography, Box } from '@mui/material'


export default function Home() {
    return (
        <Container className="container">
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" gutterBottom>Welcome to the React Shop</Typography>
                <Typography variant="body1">This is a simple mock shopping cart built to practice React, routing, state management and tests. Use the Shop page to add items to your cart.</Typography>
            </Box>
        </Container>
    )
}