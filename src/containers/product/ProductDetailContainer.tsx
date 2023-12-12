import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {IProduct, getProductDetail} from '../../store/entities/Product';
import ProductItemDetail from '../../components/product/ProductItemDetail';
import {addItem, getCartProduct} from '../../store/entities/Cart';

type Props = {
  navigation: NavigationProp<any>;
  id: number;
};

const ProductDetailContainer: React.FC<Props> = ({navigation, id}) => {
  const item: IProduct = useSelector(getProductDetail(id));
  const cartItem = useSelector(getCartProduct(id));
  const dispatch = useDispatch();
  return (
    <View style={styles.mainContainer}>
      <ProductItemDetail
        item={item}
        inCart={cartItem != null}
        onPress={() =>
          cartItem ? navigation.navigate('CartScreen') : dispatch(addItem(item))
        }
      />
    </View>
  );
};

export default ProductDetailContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
