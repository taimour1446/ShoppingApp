import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../ConfigureStore';
import {apiCallBegin} from '../datasources/Api';

export interface IProduct {
  id?: number;
  name?: string;
  colour?: string;
  price?: string;
  img?: string;
}

const slice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    listReceived: (products: IProduct[], action: PayloadAction<IProduct[]>) => {
      let payload = action.payload;
      products.splice(0, products.length);
      payload.map((i: IProduct) => products.push(i));
    },
  },
});

const {listReceived} = slice.actions;

export const onProductListReceived: any = async (list: any) => {
  try {
    return {
      type: listReceived.type,
      payload: list,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchProductList: any = () => {
  try {
    return apiCallBegin({
      url: '/products',
      method: 'GET',
      onSuccess: onProductListReceived,
    });
  } catch (error) {
    console.log(error);
  }
};

// Since there is no specified field for product in dummj json so it will return all products
export const getCategoryProductList = (state: RootState) => state.products;
export const getProductDetail = (id: number) => (state: RootState) =>
  state.products.find((x: IProduct) => x.id === id);
export default slice.reducer;
