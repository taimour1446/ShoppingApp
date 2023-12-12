import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IMenu} from '../../store/entities/Menu';

type Props = {
  item: IMenu;
  onPress: () => void;
};

const MenuItem: React.FC<Props> = ({item, onPress}) => {
  return (
    <View testID={`menu-item-${item.name}`} style={styles.mainContainer}>
      <TouchableOpacity onPress={onPress}>
        {item?.img && (
          <Image
            style={styles.image}
            resizeMode={'cover'}
            source={{uri: item.img}}
          />
        )}
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: 'black',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'lightgray',
  },
  image: {
    alignSelf: 'center',
    width: 200,
    height: 200,
  },
  name: {
    textAlign: 'center',
  },
});
