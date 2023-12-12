import {combineReducers} from 'redux';
import Product from './entities/Product';
import Menu from './entities/Menu';
import Configuration from './entities/Configuration';
import Cart from './entities/Cart';

export default combineReducers({
  configuration: Configuration,
  cart: Cart,
  menu: Menu,
  products: Product,
});
