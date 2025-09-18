export const initialState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]')
}

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const item = action.payload
      const exists = state.items.find(i => i.id === item.id)
      if (exists) {
        const items = state.items.map(i =>
          i.id === item.id ? { ...i, qty: i.qty + item.qty } : i
        )
        return { items }
      }
      return { items: [...state.items, item] }
    }
    case 'UPDATE_QTY': {
      const { id, qty } = action.payload
      if (qty <= 0) return { items: state.items.filter(i => i.id !== id) }
      return {
        items: state.items.map(i => (i.id === id ? { ...i, qty } : i))
      }
    }
    case 'REMOVE_ITEM':
      return { items: state.items.filter(i => i.id !== action.payload.id) }
    case 'CLEAR_CART':
      return { items: [] }
    default:
      return state
  }
}