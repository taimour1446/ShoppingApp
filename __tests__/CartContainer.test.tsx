// CartContainer.test.test.tsx

import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import CartContainer from '../src/containers/cart/CartContainer';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import reducer from '../src/store/Reducers';
import dataSource from '../src/store/middlewares/DataSource';
import {fireEvent} from '@testing-library/react-native';
import {addItem} from '../src/store/entities/Cart';

// Create a mock store with the same configuration as your actual store
const mockStore = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(dataSource),
});

mockStore.dispatch(
  addItem({
    id: 1,
    colour: 'Black',
    name: 'Black Sheet Strappy Textured Glitter Bodycon Dress',
    price: 10,
    img: 'http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024',
  }),
);

mockStore.dispatch(
  addItem({
    id: 2,
    colour: 'Stone',
    name: 'Stone Ribbed Strappy Cut Out Detail Bodycon Dress',
    price: 4,
    img: 'https://cdn-img.prettylittlething.com/3/6/5/a/365a5d1dce6a2b77b564379b302c9d83afccf33b_cmd2051_1.jpg?imwidth=1024',
  }),
);

// Mock navigation
const mockNavigation = {
  navigate: jest.fn(),
};

describe('CartContainer', () => {
  it('renders cart items from the store', async () => {
    const {getByTestId} = render(
      <Provider store={mockStore}>
        <CartContainer navigation={mockNavigation} />
      </Provider>,
    );

    await waitFor(() => {
      expect(getByTestId('cart-list')).toBeTruthy();
    });
  });

  it('Exactly 2 items rendered', async () => {
    const {getAllByTestId} = render(
      <Provider store={mockStore}>
        <CartContainer navigation={mockNavigation} />
      </Provider>,
    );

    await waitFor(() => {
      const items = getAllByTestId(/cart-item-/i);
      expect(items.length).toBe(2);
    });
  });

  it('increases quantity by 1 by clicking + button of first item', async () => {
    const {getByTestId, getAllByText} = render(
      <Provider store={mockStore}>
        <CartContainer navigation={mockNavigation} />
      </Provider>,
    );
    // Find all "+" buttons and select the first one
    const addButtons = getAllByText('+');
    const firstAddButton = addButtons[0];

    // Simulate pressing the first "+" button
    fireEvent.press(firstAddButton);

    // Now check if the quantity has been updated in the store
    await waitFor(() => {
      const updatedQuantity = getByTestId('quantity-1');
      expect(updatedQuantity.props.children).toBe(2);
    });
  });

  it('removes the last item from the cart when - button is clicked, leaving one item', async () => {
    const {getByTestId, getAllByText, getAllByTestId} = render(
      <Provider store={mockStore}>
        <CartContainer navigation={mockNavigation} />
      </Provider>,
    );

    // Wait for the cart items to appear in the DOM
    await waitFor(() => {
      expect(getByTestId('cart-list')).toBeTruthy();
    });

    // Find all "-" buttons and select the last one
    const removeButtons = getAllByText('-');
    const lastRemoveButton = removeButtons[removeButtons.length - 1];

    // Simulate pressing the last "-" button
    fireEvent.press(lastRemoveButton);

    // Check if only one item is left in the FlatList
    await waitFor(() => {
      const items = getAllByTestId(/cart-item-/i); // This will match all testIDs starting with 'cart-item-'
      expect(items.length).toBe(1);
    });
  });
});
