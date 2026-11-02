import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;

        const existingItem = state.items.find(item => item.name === name);
        if(existingItem){
            existingItem.quantity = (existingItem.quantity || 0) + 1;
        }else {
            state.items.push({ name, image, cost, quantity: 1})
        }
    },
    removeItem: (state, action) => {
        console.log('removeItem--------', action)
        state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
        // Find the item in the cart that matches the given name
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            console.log('quantity------', quantity)
          itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
        }    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
