import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import ButtonTouchable from '../../../components/GlobalButton';
import Input from '../../../components/Input';

import {
  Container,
  FeatherIcons,
  Title,
  SubContainer,
  InputPicker,
  PickerItem,
  ContainerInput,
  ContainerIcon,
  ContainerSelect,
  ContainerButton,
  ContainerInputs,
} from './styles';

const Address: React.FC = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState<any>('');
  const [state, setState] = useState<any>('');
  const [country, setCountry] = useState<any>('');
  const [district, setDistrict] = useState<any>('');

  const handleNextpage = ({route, params}: IRouteProps) => {
    navigation.navigate(route, params);
  };

  return (
    <Container>
      <ScrollView>
        <ContainerIcon>
          <FeatherIcons name="user-plus" size={150} />
        </ContainerIcon>
        <SubContainer>
          <Title>
            Muito bem! Agora, para receber promoções especiais para você,
            informe-nos sobre a sua região:
          </Title>
          <ContainerInputs>
            <ContainerSelect>
              <InputPicker
                mode="dialog"
                selectedValue={country}
                onValueChange={setCountry}>
                <PickerItem label="Selecione seu País" value="" />
              </InputPicker>
            </ContainerSelect>
            <ContainerSelect>
              <InputPicker
                mode="dialog"
                selectedValue={state}
                onValueChange={setState}>
                <PickerItem label="Selecione seu Estado" value="" />
              </InputPicker>
            </ContainerSelect>
            <ContainerSelect>
              <InputPicker
                mode="dialog"
                selectedValue={city}
                onValueChange={setCity}>
                <PickerItem label="Selecione sua Cidade" value="" />
              </InputPicker>
            </ContainerSelect>
            <ContainerInput>
              <Input
                typeIcon="Entypo"
                icon="address"
                maxLength={16}
                name=""
                keyboardType="visible-password"
                value={district}
                onChangeText={setDistrict}
                placeholder="Informe seu Bairro "
              />
            </ContainerInput>
          </ContainerInputs>
          <ContainerButton>
            <ButtonTouchable
              loading={false}
              disabled={
                !!(
                  country === '' ||
                  state === '' ||
                  city === '' ||
                  district === ''
                )
              }
              onPress={() => handleNextpage({route: 'Welcome'})}>
              Continuar
            </ButtonTouchable>
          </ContainerButton>
        </SubContainer>
      </ScrollView>
    </Container>
  );
};

export default Address;
