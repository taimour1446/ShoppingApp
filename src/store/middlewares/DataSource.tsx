import api, {apiCallBegin} from '../datasources/Api';

import ToastMessage from '../../utils/ToastMessage';
import NetInfo from '@react-native-community/netinfo';
import {hideLoading, showLoading} from '../entities/Configuration';

const dataSource = (store: any) => (next: any) => async (action: any) => {
  if (action === undefined) {
    return;
  }
  if (action.type === apiCallBegin.type) {
    const netStatus = await NetInfo.fetch();
    if (!netStatus.isConnected) {
      return;
    }

    const {url, onSuccess, method, data} = action.payload;
    try {
      store.dispatch(showLoading());
      let response = null;
      if (!method) {
        response = await api.get(url);
      } else if (method === 'POST') {
        response = await api.post(url, data);
      } else if (method === 'PUT') {
        response = await api.put(url, data);
      } else if (method === 'GET') {
        response = await api.get(url);
      } else if (method === 'DELETE') {
        response = await api.delete(url, data);
      }
      if (response && response.status === 200) {
        store.dispatch(hideLoading());
        const jsonData: any = response.data;

        if (onSuccess) {
          store.dispatch(await onSuccess(jsonData));
        }
      } else {
        store.dispatch(hideLoading());
        ToastMessage.showError(
          'There was an error while completing your request. Please try again later',
        );
      }
    } catch (error) {
      console.warn(error);
      ToastMessage.showError(
        'There was an error while completing your request. Please try again later',
      );
      store.dispatch(hideLoading());
    }
  } else {
    return next(action);
  }
};

export default dataSource;
