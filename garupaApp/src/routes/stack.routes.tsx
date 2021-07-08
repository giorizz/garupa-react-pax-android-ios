import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';


import { ButtonTouchable, TitleCancel } from './styles.stack';
import theme from '../global/styles/theme';

// import Splash from '../screens/Splash';
import Welcome from '../screens/Welcome';
import SignIn from '../screens/SignIn';
import ForgotPassword from '../screens/ForgotPassword';
import Phone from '../screens/SignUp/Phone';
import VerifyCode from '../screens/SignUp/VerifyCode';
import PersonalData from '../screens/SignUp/PersonalData';
import Splash from '../screens/Splash/';
import Address from '../screens/SignUp/Address';
import Credentials from '../screens/SignUp/Credentials';
import Selfie from '../screens/SignUp/Selfie';
import Success from '../screens/SignUp/Success';
import DrawerRoutes from './drawer.routes';
import Help from '../screens/Help';


const { Navigator, Screen } = createStackNavigator();

interface INavigationProps {
  navigation: any;
  route: any;
}

const OptionsSignUp = ({
  navigation,
}: INavigationProps): StackNavigationOptions => ({
  headerShown: true,
  headerTitleAlign: 'center',
  headerTintColor: theme.colors.background,
  headerTitleStyle: {
    fontFamily: theme.fonts.medium,
  },
  title: 'Criar Conta',
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerRight: () => (
    <ButtonTouchable onPress={() => navigation.navigate('Welcome')}>
      <TitleCancel>Cancelar</TitleCancel>
    </ButtonTouchable>
  ),
});

const OptionsForgotPassword = (): StackNavigationOptions => ({
  headerShown: true,
  headerTitleAlign: 'center',
  headerTintColor: theme.colors.background,
  headerTitleStyle: {
    fontFamily: theme.fonts.medium,
  },
  title: 'Recuperar Senha',
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
});

const OptionsHelperScreen = (): StackNavigationOptions => ({
  headerShown: true,
  headerTitleAlign: 'center',
  headerTintColor: theme.colors.background,
  headerTitleStyle: {
    fontFamily: theme.fonts.medium,
  },
  title: 'Ajuda e Suporte',
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
});

const StackRoutes: React.FC = () => {
  return (
    <Navigator initialRouteName="Splash">
      <Screen name="Splash" component={Splash} options={{ headerShown: false }} />
  
      <Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Screen name="SignIn" options={{ headerShown: false }} component={SignIn} />
      <Screen name="ForgotPassword"options={OptionsForgotPassword}  component={ForgotPassword} />
      <Screen name="Phone" options={OptionsSignUp} component={Phone} />
      <Screen name="VerifyCode" options={OptionsSignUp} component={VerifyCode} />
      <Screen name="Address" options={OptionsSignUp} component={Address} />
      <Screen name="Credentials" options={OptionsSignUp} component={Credentials} />
      <Screen name="Selfie" options={OptionsSignUp} component={Selfie} />
      <Screen name="Success" options={{ headerShown: false }} component={Success} />
      <Screen name="Auth" options={{ headerShown: false }} component={DrawerRoutes} />

    </Navigator>
  );
};

export default StackRoutes;
