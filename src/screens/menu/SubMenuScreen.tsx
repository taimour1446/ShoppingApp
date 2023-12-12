import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import SubMenuListContainer from '../../containers/menu/SubMenuListContainer';
import Header from '../../components/Header';

type RouteParams = {
  menuId: number;
  name: string;
};

type Props = {
  navigation: NavigationProp<any>;
  route: RouteProp<{params: RouteParams}, 'params'>;
};

const SubMenuScreen: React.FC<Props> = ({navigation, route}) => {
  const menuId = route.params.menuId;
  const name = route.params.name;

  return (
    <View style={styles.mainContainer}>
      <Header navigation={navigation} title={name} />
      <SubMenuListContainer navigation={navigation} menuId={menuId} />
    </View>
  );
};

export default SubMenuScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
