import React, {useState} from 'react';
import Button from '../../components/GlobalButton';
import Input from '../../components/Input';

import Select from '../../components/Select';

import {
  Container,
  Content,
  LockIcon,
  Text,
  TextArea,
  TextInput,
  TouchableText,
} from './styles';

const Help: React.FC = () => {
  const [disabledButton, setDisabledButton] = useState(true);

  return (
    <Container>
      <Content>
        <LockIcon name="help-outline" size={150} />
        <Text>Em qual questão podemos ajudar você?</Text>
      </Content>
      <Select title="Selecione" />
      <TextArea>
        <TouchableText>
          <TextInput multiline numberOfLines={7} textAlignVertical="top" />
        </TouchableText>
      </TextArea>
      <Button disabled={disabledButton}>ENVIAR</Button>
    </Container>
  );
};

export default Help;
