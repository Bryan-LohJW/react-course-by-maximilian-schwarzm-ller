import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  items: [
    {
      title: "Test Item",
      price: 6,
      total: 18,
      quantity: 3,
    },
  ],
  show: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleShow(state) {
      state.show = !state.show;
    },
    addQuantity(state, action) {
      const itemsIndex = state.items.findIndex(
        (element) => element.title === action.payload.title
      );
      console.log(itemsIndex);
      if (itemsIndex === -1) {
        const newItem = action.payload;
        newItem.quantity += 1;
        newItem.total += newItem.price;
        state.items.push(action.payload);
        return;
      }
      const item = state.items[itemsIndex];
      item.quantity += 1;
      item.total += item.price;
    },
    subtractQuantity(state, action) {
      const itemsIndex = state.items.findIndex(
        (element) => element.title === action.payload.title
      );
      console.log(itemsIndex);
      const item = state.items[itemsIndex];
      item.quantity -= 1;
      item.total -= item.price;
      if (item.quantity === 0) {
        state.items.splice(itemsIndex, 1);
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
