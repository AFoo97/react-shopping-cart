import React, { useEffect, useState } from 'react'
import { Container, Grid, CircularProgress } from '@mui/material'
import ProductCard from '../components/ProductCard'
import { fetchProducts } from '../api/products'


export default function Shop() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        let cancelled = false
        setLoading(true)
        fetchProducts().then(data => {
            if (!cancelled) setProducts(data)
        }).catch(err => {
            if (!cancelled) setError(err.message || 'Error')
        }).finally(() => { if (!cancelled) setLoading(false) })
            return () => { cancelled = true }
    }, [])


    if (loading) return <Container className="container"><CircularProgress /></Container>
    if (error) return <Container className="container">Error: {error}</Container>


    return (
        <Container className="container">
            <Grid container spacing={2}>
                {products.map(p => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={p.id}>
                        <ProductCard product={p} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}