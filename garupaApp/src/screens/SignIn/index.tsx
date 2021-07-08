import React, { useState } from 'react';

import Button from '../../components/GlobalButton';
import Input from '../../components/Input';

import logoImg from '../../assets/logoComplete.png';
import backgroundImage from '../../assets/launchScreen.png';

import {
  Container,
  ImageBackground,
  Content,
  InitialLogo,
  LogoImage,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccount,
  CreateAccountText,
  CreateAccountButton,
  CreateAccountButtonText,
  ContainerInput,
} from './styles';
import SocialLogin from '../../components/SocialLogin';
import { useNavigation } from '@react-navigation/native';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()


  const handleNextpage = ({route, params}: IRouteProps) => {
    navigation.navigate(route, params);
  };
  return (
    <Container>
      <InitialLogo>
        <ImageBackground source={backgroundImage}>
          <LogoImage resizeMode="contain" source={logoImg} />
        </ImageBackground>
      </InitialLogo>
      <Content>
        <ContainerInput>
          <Input
            typeIcon="Feather"
            keyboardType="visible-password"
            value={email}
            onChangeText={setEmail}
            name="email"
            icon="mail"
            placeholder="Email"
          />
        </ContainerInput>
        <ContainerInput>
          <Input
            typeIcon="Feather"
            showEye
            value={password}
            onChangeText={setPassword}
            name="password"
            icon="lock"
            placeholder="Senha"
          />
        </ContainerInput>

        <Button
          onPress={() => handleNextpage({route:'Auth'})}
          loading={false}>
          ENTRAR
        </Button>

        <ForgotPassword
          onPress={() => {
            console.log('Entrar com facebook');
          }}>
          <ForgotPasswordText>ESQUECI MINHA SENHA</ForgotPasswordText>
        </ForgotPassword>

        <CreateAccount>
          <CreateAccountText>Ainda não possui conta?</CreateAccountText>
          <CreateAccountButton>
            <CreateAccountButtonText>CRIAR AGORA!</CreateAccountButtonText>
          </CreateAccountButton>
        </CreateAccount>
      </Content>
      <ImageBackground source={backgroundImage}>
        <SocialLogin />
      </ImageBackground>
    </Container>
  );
};

export default SignIn;
