import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import CategoryListContainer from '../../containers/menu/CategoryListContainer';
import Header from '../../components/Header';

type RouteParams = {
  menuId: number;
  subMenuId: number;
  name: string;
};

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<{params: RouteParams}, 'params'>;
};

const CategoryScreen: React.FC<Props> = ({navigation, route}) => {
  const menuId = route.params.menuId;
  const subMenuId = route.params.subMenuId;
  const name = route.params.name;

  return (
    <View style={styles.mainContainer}>
      <Header navigation={navigation} title={name} />
      <CategoryListContainer
        navigation={navigation}
        menuId={menuId}
        subMenuId={subMenuId}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
