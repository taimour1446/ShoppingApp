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
const itemContainer = width - 30;

type Props = {
  item: IProduct;
  onPress?: () => void;
  inCart?: boolean;
};

const ProductItemDetail: React.FC<Props> = ({item, onPress, inCart}) => {
  return (
    <View style={styles.mainContainer}>
      {item?.img && (
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={{uri: item.img}}
        />
      )}
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>Price: ${item?.colour}</Text>
      <Text style={styles.color}>Color: {item?.price}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text>{inCart ? 'Go To Cart' : 'Add To Cart'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItemDetail;

const styles = StyleSheet.create({
  mainContainer: {
    borderColor: 'black',
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: itemContainer,
    height: itemContainer,
  },
  name: {
    fontWeight: '800',
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    fontWeight: '600',
    fontSize: 16,
  },
  color: {
    fontWeight: '600',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'lightgray',
    width: 200,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
