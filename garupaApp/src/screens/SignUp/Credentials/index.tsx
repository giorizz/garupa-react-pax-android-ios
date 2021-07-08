import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonTouchable from '../../../components/GlobalButton';
import Input from '../../../components/Input';

import {
  Container, FeatherIcons, Title, SubContainer, PickerDDD,
  PickerItem, ContainerInput, ContainerIcon,
  ContainerGender, ContainerButton, ContainerInputs
} from './styles'

const Credentials: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [forcePassword, setForcePassword] = useState<Array<Boolean>>([false, false, false]);

  const handleNextpage = ({ route, params }: IRouteProps) => {
    navigation.navigate(route, params);
  }

  const passwordStrong = (text: string) => {
    let numeros = /([0-9])/;
    let alfabeto = /([a-zA-Z])/;
    let chEspeciais = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<,',`])/;
    
    setPassword(text)
    if (text != '' ) {
      if ((text.search(chEspeciais) != -1 && text.search(numeros) != -1 && text.search(alfabeto) != -1) && text.length >= 6) {
        forcePassword[2] = true;
      } else {
        forcePassword[2] = false;
      }
      if ((text.search(numeros) != -1 && text.search(alfabeto) != -1 || text.search(chEspeciais) != -1)   && text.length >= 6) {
        forcePassword[1] = true;
      } else {
        forcePassword[1] = false;
      }
      if ((text.search(alfabeto) != -1 || text.search(numeros) != -1 || text.search(chEspeciais) != -1)  && text.length >= 6) {
        forcePassword[0] = true;
      } else {
        forcePassword[0] = false;
      }
    } else {
      forcePassword[0] = false
      forcePassword[1] = false
      forcePassword[2] = false
      setPassword('');
      console.log(`zerou`)
    }

    setForcePassword(forcePassword)
  }

  return (
    <Container >
      <ScrollView>
        <ContainerIcon>
          <FeatherIcons name="lock" size={150} />
        </ContainerIcon>
        <SubContainer>
          <Title>Estamos finalizando. Para concluirmos, por favor, informe o email e a senha usados para acessar o Garupa</Title>
          <ContainerInputs>
            <ContainerInput>
              <Input typeIcon="Feather" keyboardType='visible-password' icon="mail" name="phone" value={email} onChangeText={setEmail} placeholder="Informe seu Email"></Input>
            </ContainerInput>
            <ContainerInput>
              <Input typeIcon="Feather" keyboardType='visible-password' icon="mail" name="phone" value={confirmEmail} onChangeText={setConfirmEmail} placeholder="Confirme seu Email "></Input>
            </ContainerInput>
            <ContainerInput>
              <Input typeIcon="Feather" showEye icon="lock" name="" value={password} onChangeText={passwordStrong} placeholder="Informe sua Senha "></Input>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                {forcePassword[0] && password != '' && <View style={{ width: 40, height: 3, backgroundColor: 'green', marginLeft: 10, marginTop: 10 }}></View>}
                {forcePassword[1] && password != '' && <View style={{ width: 40, height: 3, backgroundColor: 'orange', marginLeft: 10, marginTop: 10 }}></View>}
                {forcePassword[2] && password != '' && <View style={{ width: 40, height: 3, backgroundColor: 'red', marginLeft: 10, marginTop: 10 }}></View>}
              </View>
            </ContainerInput>
            <ContainerInput>
              <Input typeIcon="Feather" showEye icon="lock" name="" value={confirmPassword} onChangeText={setConfirmPassword} placeholder="Confirme sua Senha "></Input>
            </ContainerInput>
          </ContainerInputs>
          <ContainerButton>
            <ButtonTouchable loading={false} disabled={email == '' || confirmEmail == '' || confirmPassword == '' || password == '' ? true : false} onPress={() => handleNextpage({ route: 'Address' })} >Continuar</ButtonTouchable>
          </ContainerButton>
        </SubContainer>
      </ScrollView>
    </Container >

  );
}

export default Credentials;
