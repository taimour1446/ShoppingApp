/* global jest */
// jest.setup.js

// Global mocks
jest.mock('react-native-toast-message', () => ({
  Toast: jest.fn(),
}));

jest.mock('@react-native-community/netinfo', () => ({
  NetInfo: jest.fn(),
}));
