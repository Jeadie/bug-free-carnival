import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AuthLoading from './screens/AuthLoading'
import Home from './screens/Home'
import Login from './screens/Login';
import RecordFluid from './screens/RecordFluid';

const headerStyles = {
  headerStyle: {
    backgroundColor: '#f22',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 22,
  },
}

const AppStack = createStackNavigator(
  {
    RecordFluid: RecordFluid, Home: Home
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      ...headerStyles,
    },
  }
);

const AuthStack = createStackNavigator(
  {
    Login: Login
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      ...headerStyles,
    },
  }
);

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


