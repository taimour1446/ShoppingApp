import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppNavigator from './src/navigation/Router';
import store from './src/store/ConfigureStore';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
