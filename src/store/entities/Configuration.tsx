import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../ConfigureStore';

export interface IConfiguration {
  isLoading: boolean;
}

const slice = createSlice({
  name: 'configuration',
  initialState: {
    isLoading: false,
  } as IConfiguration,
  reducers: {
    isLoadingUpdated: (
      configuration: IConfiguration,
      action: PayloadAction<boolean>,
    ) => {
      let payload = action.payload;
      configuration.isLoading = payload;
    },
  },
});

const {isLoadingUpdated} = slice.actions;

export const showLoading: any = () => {
  try {
    return {
      type: isLoadingUpdated.type,
      payload: true,
    };
  } catch (error) {
    console.log(error);
  }
};

export const hideLoading: any = () => {
  try {
    return {
      type: isLoadingUpdated.type,
      payload: false,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getLoadingStatus = (state: RootState) =>
  state.configuration.isLoading;

export default slice.reducer;
