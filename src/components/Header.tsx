import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
  title: string;
  canGoBack?: boolean;
};

const Header: React.FC<Props> = ({title, navigation, canGoBack = true}) => {
  return (
    <View>
      <View style={styles.container}>
        {!canGoBack ? (
          <TouchableOpacity activeOpacity={1} onPress={() => {}}>
            <Image
              resizeMode="contain"
              style={styles.image}
              tintColor={'black'}
              source={require('../assets/ic_menu.png')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              resizeMode="contain"
              style={styles.image}
              tintColor={'black'}
              source={require('../assets/ic_back.png')}
            />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Image
            resizeMode="contain"
            style={styles.image}
            tintColor={'black'}
            source={require('../assets/ic_cart.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 5,
    backgroundColor: 'lightgray',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  image: {
    width: 30,
    height: 30,
  },
});
