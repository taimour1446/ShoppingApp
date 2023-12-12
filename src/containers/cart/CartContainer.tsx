import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {ICart, addItem, getCart, removeItem} from '../../store/entities/Cart';
import CartItem from '../../components/cart/CartItem';

type Props = {
  navigation?: NavigationProp<any>;
};

const CartContainer: React.FC<Props> = ({}) => {
  const list = useSelector(getCart);
  const [total, setTotal] = useState<number>(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let sum = 0;
    list.map((x: ICart) => (sum += x?.quantity * x?.price));
    sum = sum?.toFixed(2);
    setTotal(sum);
  }, [list]);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        testID="cart-list"
        data={list}
        keyExtractor={(item, index) => 'key-' + index}
        renderItem={({item}) => (
          <CartItem
            item={item}
            onAdd={() => dispatch(addItem(item))}
            onRemove={() => dispatch(removeItem(item))}
          />
        )}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.total}>Total: {total}</Text>
      </View>
    </View>
  );
};

export default CartContainer;

const styles = StyleSheet.create({
  mainContainer: {},
  detailsContainer: {
    marginHorizontal: 5,
    marginVertical: 15,
    alignItems: 'flex-end',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
