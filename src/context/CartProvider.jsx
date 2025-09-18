import React, { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import { cartReducer, initialState } from './cartReducer'
import { CartContext } from './CartContext'

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.items))
  }, [state.items])

  const addToCart = (product, qty = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        qty
      }
    })
  }

  const updateQty = (id, qty) => {
    dispatch({ type: 'UPDATE_QTY', payload: { id, qty } })
  }

  const removeFromCart = (id) =>
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const totalItems = state.items.reduce((sum, i) => sum + i.qty, 0)
  const totalPrice = state.items.reduce((sum, i) => sum + i.qty * i.price, 0)

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
)

}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
}