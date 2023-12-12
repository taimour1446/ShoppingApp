// ProductListContainer.test.tsx

import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import ProductListContainer from '../src/containers/product/ProductListContainer';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import reducer from '../src/store/Reducers';
import dataSource from '../src/store/middlewares/DataSource';

// Create a mock store with the same configuration as your actual store
const mockStore = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(dataSource),
});

jest.mock('../src/store/datasources/Api', () => ({
  apiCallBegin: jest.fn().mockImplementation(({}) => {
    return dispatch => {
      const mockApiResponse = [
        {
          id: 1,
          colour: 'Black',
          name: 'Black Sheet Strappy Textured Glitter Bodycon Dress',
          price: 10,
          img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
        },
        {
          id: 2,
          colour: 'Stone',
          name: 'Stone Ribbed Strappy Cut Out Detail Bodycon Dress',
          price: 4,
          img: 'https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024',
        },
        {
          id: 3,
          colour: 'Black',
          name: 'Black Frill Tie Shoulder Bodycon Dress',
          price: 7.99,
          img: 'https://cdn-img.prettylittlething.com/d/c/3/3/dc337260f9ecefdb99a8c8e98cd73ccb1b79cea5_cmb6804_4.jpg?imwidth=1024',
        },
        {
          id: 5,
          colour: 'Red',
          name: 'Red Pin Stripe Belt T Shirt Dress',
          price: 17,
          img: 'https://cdn-img.prettylittlething.com/f/7/1/8/f718a4011ddf92f48aeefff6da0f475178694599_cly0842_1.jpg?imwidth=1024',
        },
      ];
      dispatch({type: 'products/listReceived', payload: mockApiResponse});
    };
  }),
}));

// Mock navigation
const mockNavigation = {
  navigate: jest.fn(),
};

describe('ProductListContainer', () => {
  it('Product list rendered', async () => {
    const {getByTestId} = render(
      <Provider store={mockStore}>
        <ProductListContainer navigation={mockNavigation} />
      </Provider>,
    );

    await waitFor(() => {
      expect(getByTestId('product-list')).toBeTruthy();
    });
  });

  it('Exactly 4 items rendered', async () => {
    const {getAllByTestId} = render(
      <Provider store={mockStore}>
        <ProductListContainer navigation={mockNavigation} />
      </Provider>,
    );

    await waitFor(() => {
      const items = getAllByTestId(/product-item-/i); // This will match all testIDs starting with 'cart-item-'
      expect(items.length).toBe(4);
    });
  });
});
