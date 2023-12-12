import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../ConfigureStore';
import {apiCallBegin} from '../datasources/Api';

export interface IChildren {
  name?: string;
  categories?: string[];
}

export interface IMenu {
  name?: string;
  children?: IChildren;
  img?: string;
}

const slice = createSlice({
  name: 'menu',
  initialState: [],
  reducers: {
    listReceived: (menu: IMenu[], action: PayloadAction<IMenu[]>) => {
      let payload = action.payload;
      menu.splice(0, menu.length);
      payload.map((i: IMenu) => menu.push(i));
    },
  },
});

export const {listReceived} = slice.actions;

export const onMenuListReceived: any = async (list: any) => {
  try {
    return {
      type: listReceived.type,
      payload: list,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchMenuList: any = () => {
  try {
    return apiCallBegin({
      url: '/menu',
      method: 'GET',
      onSuccess: onMenuListReceived,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMenuList = (state: RootState) => state.menu;

// Getting submneus using menu index as there is no other identification key
export const getSubMenuList = (index: number) => (state: RootState) =>
  state.menu[index].children;
export const getSubMenuCategoryList =
  (index: number) => (subMenuIndex: number) => (state: RootState) =>
    state.menu[index].children[subMenuIndex];

export default slice.reducer;
