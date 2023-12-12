import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import Header from '../../components/Header';
import ProductDetailContainer from '../../containers/product/ProductDetailContainer';

type RouteParams = {
  id: number;
};

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<{params: RouteParams}, 'params'>;
};

const ProductDetailScreen: React.FC<Props> = ({navigation, route}) => {
  const id = route.params.id;

  return (
    <View style={styles.mainContainer}>
      <Header navigation={navigation} title={'Details'} />
      <ProductDetailContainer id={id} navigation={navigation} />
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
