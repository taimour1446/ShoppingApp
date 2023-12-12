import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import ProductListContainer from '../../containers/product/ProductListContainer';
import {getLoadingStatus} from '../../store/entities/Configuration';
import {useSelector} from 'react-redux';
import Header from '../../components/Header';

type RouteParams = {
  menuId?: number;
  subMenuId?: number;
  name: string;
};

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<{params: RouteParams}, 'params'>;
};

const ProductListScreen: React.FC<Props> = ({navigation, route}) => {
  const isLoading: boolean = useSelector(getLoadingStatus);
  const name = route.params.name;

  return (
    <View style={styles.mainContainer}>
      <Header navigation={navigation} title={name} />
      {isLoading && <ActivityIndicator size={'large'} />}
      <ProductListContainer navigation={navigation} />
    </View>
  );
};

export default ProductListScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
