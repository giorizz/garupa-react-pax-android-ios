import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/GlobalButton';


import logoImg from './../../assets/logoComplete.png';
import backgroundImage from '../../assets/launchScreen.png';
import {
  Container,
  ImageBackground,
  Content,
  InitialLogo,
  LogoImage,
} from './styles';

import SocialLogin from '../../components/SocialLogin';


const Welcome: React.FC = () => {
  const navigation = useNavigation();
  const handleNextpage = ({route, params}: IRouteProps) => {
    navigation.navigate(route, params);
  };

  return (
    <Container>
      <InitialLogo>
        <ImageBackground source={backgroundImage}>
          <LogoImage resizeMode="contain" source={logoImg} />
          <Content>
            <Button
              onPress={() => handleNextpage({route: 'Phone'})}
              loading={false}
              secondary>
              CRIAR CONTA
            </Button>

            <Button
              onPress={() => handleNextpage({route: 'SignIn'})}
              loading={false}
              secondary={false}>
              ENTRAR
            </Button>
          </Content>
          <SocialLogin />
        </ImageBackground>
      </InitialLogo>
    </Container>
  );
};

export default Welcome;
