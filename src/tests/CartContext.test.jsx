import { renderHook, act } from '@testing-library/react';
import { test, expect } from 'vitest';
import { CartProvider, useCart } from '../CartContext';


test('adds item to cart', () => {
const { result } = renderHook(() => useCart(), { wrapper: CartProvider });
act(() => {
result.current.dispatch({ type: 'ADD_ITEM', payload: { id: 1, title: 'Test Item', quantity: 1 } });
});
expect(result.current.cart.length).toBe(1);
});