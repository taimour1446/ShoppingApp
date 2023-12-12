import Toast from 'react-native-toast-message';

const ToastMessage = {
  showError: (msg: string) =>
    Toast.show({
      visibilityTime: 5000,
      topOffset: 100,
      type: 'error',
      text1: 'Oops!',
      text2: msg,
    }),
  showSuccess: (msg: string) =>
    Toast.show({
      visibilityTime: 5000,
      topOffset: 100,
      type: 'success',
      text1: 'Success',
      text2: msg,
    }),
};

export default ToastMessage;
