import React, {useEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchProductList,
  getCategoryProductList,
} from '../../store/entities/Product';
import ProductItem from '../../components/product/ProductItem';

type Props = {
  navigation: NavigationProp<any>;
};

const ProductListContainer: React.FC<Props> = ({navigation}) => {
  const list = useSelector(getCategoryProductList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductList());
  }, [dispatch]);

  const navigateTo = (id: number) =>
    navigation.navigate('ProductDetailScreen', {id});

  return (
    <View style={styles.mainContainer}>
      <FlatList
        testID="product-list"
        data={list}
        numColumns={2}
        keyExtractor={(item, index) => 'key-' + index}
        renderItem={({item}) => (
          <ProductItem item={item} onPress={() => navigateTo(item.id)} />
        )}
      />
    </View>
  );
};

export default ProductListContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
