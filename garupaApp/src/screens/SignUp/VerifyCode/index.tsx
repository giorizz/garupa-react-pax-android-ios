import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import ButtonTouchable from '../../../components/GlobalButton';

import {
  Container,
  ContainerIcon,
  ContainerIconRefresh,
  MaterialIcon,
  ContainerCode,
  TitleResend,
  ContainerTitle,
  Title,
  ContainerButton,
  ContainerCodeInput,
  InputText,
} from './styles';

const VerifyCode: React.FC = () => {
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');
  const navigation = useNavigation();
  const handleNextpage = ({route, params}: IRouteProps) => {
    navigation.navigate(route, params);
  };

  return (
    <Container>
      <ContainerIcon>
        <MaterialIcon name="message" size={100} />
      </ContainerIcon>
      <ContainerTitle>
        <Title>
          Insira seu codigo de 4 digitos enviado para o numero (99) 99999-9999
        </Title>
      </ContainerTitle>
      <ContainerCodeInput>
        <ContainerCode>
          <InputText
            style={{textAlign: 'center', width: '20%'}}
            maxLength={1}
            keyboardType="number-pad"
            value={code1}
            onChangeText={setCode1}
            importantForAutofill="yes"
            placeholder="0"
          />
          <InputText
            style={{textAlign: 'center', width: '20%'}}
            maxLength={1}
            keyboardType="number-pad"
            value={code2}
            onChangeText={setCode2}
            importantForAutofill="yes"
            placeholder="0"
          />
          <InputText
            style={{textAlign: 'center', width: '20%'}}
            maxLength={1}
            keyboardType="number-pad"
            value={code3}
            onChangeText={setCode3}
            importantForAutofill="yes"
            placeholder="0"
          />
          <InputText
            style={{textAlign: 'center', width: '20%'}}
            maxLength={1}
            keyboardType="number-pad"
            value={code4}
            onChangeText={setCode4}
            importantForAutofill="yes"
            placeholder="0"
          />
        </ContainerCode>
        <ContainerIconRefresh>
          <MaterialIcon name="refresh" size={60} />
          <TitleResend>REENVIAR CODIGO</TitleResend>
        </ContainerIconRefresh>
      </ContainerCodeInput>

      <ContainerButton>
        <ButtonTouchable
          loading={false}
          onPress={() => handleNextpage({route: 'PersonalData'})}>
          Continuar
        </ButtonTouchable>
      </ContainerButton>
    </Container>
  );
};

export default VerifyCode;
