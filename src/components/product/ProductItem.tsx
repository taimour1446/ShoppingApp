import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {IProduct} from '../../store/entities/Product';
const {width} = Dimensions.get('window');
const itemContainer = width / 2;
type Props = {
  item: IProduct;
  onPress: () => void;
};

const ProductItem: React.FC<Props> = ({item, onPress}) => {
  return (
    <View testID={`product-item-${item.id}`} style={styles.mainContainer}>
      <TouchableOpacity onPress={onPress}>
        {item?.img && (
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{uri: item.img}}
          />
        )}
        <Text ellipsizeMode={'tail'} numberOfLines={2} style={styles.name}>
          {item.name}
        </Text>
        <View style={styles.horizontalContainer}>
          <Text>Price: {item?.price}</Text>
          <Text>Color: {item?.colour}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: 'black',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'lightgray',
    width: itemContainer - 10,
    height: itemContainer + 40,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    alignSelf: 'center',
    width: itemContainer - 10,
    height: itemContainer - 20,
  },
  name: {
    textAlign: 'center',
  },
});
