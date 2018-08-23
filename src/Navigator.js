import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AuthLoading from './screens/AuthLoading'
import Home from './screens/Home'
import Login from './screens/Login';

const AppStack = createStackNavigator({ Home: Home });
const AuthStack = createStackNavigator({ Login: Login });

export default createSwitchNavigator(
  {
    authLoading: AuthLoading,
    auth: AuthStack,
    app: AppStack,

  },
  {
    initialRouteName: 'authLoading',
  }
);
