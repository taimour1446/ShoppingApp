import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {IChildren, getSubMenuCategoryList} from '../../store/entities/Menu';
import {useSelector} from 'react-redux';
import MenuItem from '../../components/menu/MenuItem';

type Props = {
  navigation: NavigationProp<any>;
  menuId: number;
  subMenuId: number;
};

const CategoryListContainer: React.FC<Props> = ({
  navigation,
  menuId,
  subMenuId,
}) => {
  const subMenu: IChildren = useSelector(
    getSubMenuCategoryList(menuId)(subMenuId),
  );
  const categorList = subMenu.categories;
  const navigateTo = (item: string, categoryId: number) =>
    navigation.navigate('ProductListScreen', {
      menuId,
      subMenuId,
      categoryId,
      name: item,
    });
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={categorList}
        keyExtractor={(item, index) => 'key-' + index}
        renderItem={({item, index}) => (
          <MenuItem
            item={{name: item}}
            onPress={() => navigateTo(item, index)}
          />
        )}
      />
    </View>
  );
};

export default CategoryListContainer;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
