import React from 'react';
import Button from '../../components/GlobalButton';
import Input from '../../components/Input';

import {Container, Content, LockIcon, Text} from './styles';

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <Content>
        <LockIcon name="unlocked" size={150} />
        <Text>
          Insira o e-mail, celular ou CPF cadastrados no campo abaixo e lhe
          enviaremos intruções de como recuperar sua senha.
        </Text>
      </Content>
      <Button>CONTINUAR</Button>
    </Container>
  );
};

export default ForgotPassword;
