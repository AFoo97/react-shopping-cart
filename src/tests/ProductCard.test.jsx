import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import ProductCard from '../ProductCard';
import { CartProvider } from '../../context/CartContext';


test('renders product title and add to cart button', () => {
render(
<CartProvider>
<ProductCard product={{ id: 1, title: 'Test Product', price: 10 }} />
</CartProvider>
);


expect(screen.getByText('Test Product')).toBeInTheDocument();
expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
});