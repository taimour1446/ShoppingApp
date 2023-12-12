import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import MenuListContainer from '../../containers/menu/MenuListContainer';
import {useSelector} from 'react-redux';
import {getLoadingStatus} from '../../store/entities/Configuration';
import Header from '../../components/Header';

type Props = {
  navigation: NavigationProp<any>;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const isLoading: boolean = useSelector(getLoadingStatus);

  return (
    <View style={styles.mainContainer}>
      <Header navigation={navigation} title="Home" canGoBack={false} />
      {isLoading && <ActivityIndicator size={'large'} />}
      <MenuListContainer navigation={navigation} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
