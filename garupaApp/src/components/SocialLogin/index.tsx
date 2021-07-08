import React from 'react';
import theme from '../../global/styles/theme';
import SocialLoginButton from '../SocialButtonLogin';

import {Container, GoogleButton, GoogleLogo} from './styles';
import googleIcon from '../../assets/icons/google.png';

const SocialLogin: React.FC = () => {
  return (
    <Container>
      <SocialLoginButton icon="facebook" color={theme.colors.facebook} />
      <GoogleButton>
        <GoogleLogo source={googleIcon} />
      </GoogleButton>
      <SocialLoginButton icon="apple" color={theme.colors.apple} />
    </Container>
  );
};

export default SocialLogin;
