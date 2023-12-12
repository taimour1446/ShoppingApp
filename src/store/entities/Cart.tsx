import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../ConfigureStore';

export interface ICart {
  id?: number;
  name?: string;
  colour?: string;
  price?: string;
  img?: string;
  quantity?: number;
}

const slice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    onAdded: (cart: ICart[], action: PayloadAction<ICart>) => {
      let payload = action.payload;
      let index = cart.findIndex(x => x.id === payload.id);
      if (index > -1) {
        cart[index].quantity = cart[index].quantity + 1;
      } else {
        cart.push({...payload, quantity: 1});
      }
    },
    onRemoved: (cart: ICart[], action: PayloadAction<ICart>) => {
      let payload = action.payload;
      let index = cart.findIndex(x => x.id === payload.id);
      if (index > -1) {
        if (cart[index].quantity > 1) {
          cart[index].quantity = cart[index].quantity - 1;
        } else {
          cart.splice(index, 1);
        }
      }
    },
  },
});

const {onAdded, onRemoved} = slice.actions;

export const addItem: any = (item: ICart) => {
  try {
    return {
      type: onAdded.type,
      payload: item,
    };
  } catch (error) {
    console.log(error);
  }
};
export const removeItem: any = (item: ICart) => {
  try {
    return {
      type: onRemoved.type,
      payload: item,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getCart = (state: RootState) => state.cart;
export const getCartProduct = (id: number) => (state: RootState) =>
  state.cart.find((x: ICart) => x.id === id);
export default slice.reducer;
