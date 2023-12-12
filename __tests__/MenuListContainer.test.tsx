// MenuListContainer.test.tsx

// 1. Import statements
import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import MenuListContainer from '../src/containers/menu/MenuListContainer';
import {Provider} from 'react-redux';
import reducer from '../src/store/Reducers';
import dataSource from '../src/store/middlewares/DataSource';
import {configureStore} from '@reduxjs/toolkit';

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
          name: 'NEW IN',
          img: 'https://cdn-media.prettylittlething.com/studio/mega-menu/desktop/12.11.20/newin.jpg',
          children: [
            {
              name: 'NEW IN',
              categories: ['View all', 'New in today', 'New in this week'],
            },
            {
              name: 'PLT RANGES',
              categories: ['New in plus', 'New in petite', 'New in tall'],
            },
          ],
        },
      ];
      dispatch({type: 'menu/listReceived', payload: mockApiResponse});
    };
  }),
}));

// Mock navigation
const mockNavigation = {
  navigate: jest.fn(),
};

describe('MenuListContainer', () => {
  it('Menu list rendered', async () => {
    const {getByTestId} = render(
      <Provider store={mockStore}>
        <MenuListContainer navigation={mockNavigation} />
      </Provider>,
    );

    await waitFor(() => {
      expect(getByTestId('menu-list')).toBeTruthy();
    });
  });

  it('Exactly 1 item rendered', async () => {
    const {getAllByTestId} = render(
      <Provider store={mockStore}>
        <MenuListContainer navigation={mockNavigation} />
      </Provider>,
    );

    await waitFor(() => {
      const items = getAllByTestId(/menu-item-/i); // This will match all testIDs starting with 'cart-item-'
      expect(items.length).toBe(1);
    });
  });

  // Other test cases...
});
