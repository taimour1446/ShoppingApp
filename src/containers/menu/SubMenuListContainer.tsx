import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {IChildren, getSubMenuList} from '../../store/entities/Menu';
import {useSelector} from 'react-redux';
import MenuItem from '../../components/menu/MenuItem';

type Props = {
  navigation: NavigationProp<any>;
  menuId: number;
};

const SubMenuListContainer: React.FC<Props> = ({navigation, menuId}) => {
  const subMenuList = useSelector(getSubMenuList(menuId));
  const navigateTo = (item: IChildren, subMenuId: number) =>
    navigation.navigate('CategoryScreen', {menuId, subMenuId, name: item.name});

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={subMenuList}
        keyExtractor={(item, index) => 'key-' + index}
        renderItem={({item, index}) => (
          <MenuItem item={item} onPress={() => navigateTo(item, index)} />
        )}
      />
    </View>
  );
};

export default SubMenuListContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
