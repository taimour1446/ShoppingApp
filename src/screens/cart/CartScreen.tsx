import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {getLoadingStatus} from '../../store/entities/Configuration';
import {useSelector} from 'react-redux';
import Header from '../../components/Header';
import CartContainer from '../../containers/cart/CartContainer';

type Props = {
  navigation: NavigationProp<any>;
};

const CartScreen: React.FC<Props> = ({navigation}) => {
  const isLoading: boolean = useSelector(getLoadingStatus);
  return (
    <View style={styles.mainContainer}>
      <Header navigation={navigation} title={'Cart'} />
      {isLoading && <ActivityIndicator size={'large'} />}
      <CartContainer navigation={navigation} />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
