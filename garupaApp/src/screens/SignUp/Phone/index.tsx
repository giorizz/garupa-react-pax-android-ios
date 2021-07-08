import React, {useState, useEffect, useLayoutEffect} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ButtonTouchable from '../../../components/GlobalButton';
import {
  Container,
  FontAwesomeIcon,
  Title,
  SubContainer,
  PickerDDD,
  PickerItem,
  ContainerPhone,
  ContainerIcon,
  ContainerDDD,
  InputTell,
  Terms,
  ContainerTerms,
  Check,
  ContainerButton,
  ContainerInputs,
} from './styles';

import Input from '../../../components/Input';

const SignUp: React.FC = () => {
  const [ddd, setDdd] = useState<any>('');
  const [phone, setPhone] = useState<string>('');
  const [acceptTerms, setAcceptTerms] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useNavigation();

  useEffect(() => {
    console.log('Phone', phone, ddd);
  }, [phone]);
  
  const handleNextpage = ({route, params} : IRouteProps) => {
    navigation.navigate(route, params);
  }

  return (
    <Container>
      <ContainerIcon>
        <FontAwesomeIcon name="phone" size={150} />
      </ContainerIcon>
      <SubContainer>
        <Title>Por favor, informe o número do seu celular :</Title>
        <ScrollView>
          <ContainerInputs>
            <ContainerDDD>
              <PickerDDD
                dropdownIconColor="#4B9988"
                mode="dialog"
                selectedValue={ddd}
                onValueChange={itemValue => setDdd(itemValue)}>
                <PickerItem label="Selecione seu DDD" value="" />
                <PickerItem label="+55 Brasil" value="oie" />
                <PickerItem label="+56 Paraguai" value="oaise" />
                <PickerItem label="+57" value="oaie" />
              </PickerDDD>
            </ContainerDDD>
            <ContainerPhone>
              <Input
                typeIcon="Feather"
                icon="phone"
                name="phone"
                keyboardType="number-pad"
                value={phone}
                onChangeText={setPhone}
                placeholder="Seu numero de celular "
              />
            </ContainerPhone>
          </ContainerInputs>
          <ContainerTerms>
            <Check
              onFillColor="red"
              value={acceptTerms}
              onValueChange={item => setAcceptTerms(item)}
            />
            <Terms>Aceito termos de uso</Terms>
          </ContainerTerms>
          <ContainerButton>
            <ButtonTouchable
              loading={false}
              disabled={!!(ddd == '' || phone == '')}
              onPress={() => handleNextpage({route:'VerifyCode'})}
            >Continuar</ButtonTouchable>

          </ContainerButton>
        </ScrollView>
      </SubContainer>
    </Container>
  );
};

export default SignUp;
