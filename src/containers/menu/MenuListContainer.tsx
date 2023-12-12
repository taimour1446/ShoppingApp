import React, {useEffect} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {IMenu, fetchMenuList, getMenuList} from '../../store/entities/Menu';
import {useDispatch, useSelector} from 'react-redux';
import MenuItem from '../../components/menu/MenuItem';

type Props = {
  navigation: NavigationProp<any>;
};

const MenuListContainer: React.FC<Props> = ({navigation}) => {
  const menuList = useSelector(getMenuList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMenuList());
  }, [dispatch]);

  const navigateTo = (item: IMenu, menuId: number) =>
    navigation.navigate('SubMenuScreen', {menuId, name: item.name});

  return (
    <View style={styles.mainContainer}>
      <FlatList
        testID="menu-list"
        data={menuList}
        keyExtractor={(item, index) => 'key-' + index}
        renderItem={({item, index}) => (
          <MenuItem item={item} onPress={() => navigateTo(item, index)} />
        )}
      />
    </View>
  );
};

export default MenuListContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
