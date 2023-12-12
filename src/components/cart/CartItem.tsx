import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ICart} from '../../store/entities/Cart';

type Props = {
  item: ICart;
  onAdd?: () => void;
  onRemove?: () => void;
};

const CartItem: React.FC<Props> = ({item, onAdd, onRemove}) => {
  return (
    <View testID={`cart-item-${item.id}`} style={styles.mainContainer}>
      <View style={styles.horizontalContainer}>
        <View style={styles.leftContainer}>
          {item?.img && (
            <Image
              style={styles.image}
              resizeMode={'contain'}
              source={{uri: item.img}}
            />
          )}
        </View>
        <View style={styles.rightContainer}>
          <Text ellipsizeMode={'tail'} numberOfLines={2}>
            {item.name}
          </Text>
          <Text>Color: {item?.colour}</Text>
          <Text>Price: ${item?.price}</Text>
          <View style={styles.quantityContainer}>
            <View style={styles.horizontalQuantityContainer}>
              <TouchableOpacity onPress={onRemove}>
                <Text style={styles.quantitySymbol}>-</Text>
              </TouchableOpacity>
              <Text testID={`quantity-${item.id}`} style={styles.quantity}>
                {item.quantity}
              </Text>
              <TouchableOpacity onPress={onAdd}>
                <Text style={styles.quantitySymbol}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderWidth: 0.2,
    borderColor: 'black',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'lightgray',
  },
  leftContainer: {
    flex: 0.2,
  },
  rightContainer: {
    flex: 0.8,
    marginHorizontal: 5,
  },
  quantityContainer: {width: 80, alignContent: 'center'},
  horizontalContainer: {
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  horizontalQuantityContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  image: {
    width: 70,
    height: 70,
  },
  quantitySymbol: {
    fontSize: 20,
  },
  quantity: {
    borderWidth: 0.2,
    padding: 5,
  },
});
