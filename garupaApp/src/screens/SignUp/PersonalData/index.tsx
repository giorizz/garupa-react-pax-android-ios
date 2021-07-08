import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import ButtonTouchable from '../../../components/GlobalButton';
import Input from '../../../components/Input';

import {
  Container, FeatherIcons, Title, SubContainer, PickerDDD,
  PickerItem, ContainerInput, ContainerIcon,
  ContainerGender, ContainerButton, ContainerInputs
} from './styles'

const PersonalData: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCpf] = useState('');
  const [gender, setGender] = useState<any>('');
 
  const handleNextpage = ({route, params} : IRouteProps) => {
    navigation.navigate(route, params);
  }

  return (
    <Container >
      <ScrollView>
        <ContainerIcon>
          <FeatherIcons name="user-plus" size={150} />
        </ContainerIcon>
        <SubContainer>
          <Title>Legal !! queremos conhecer mais sobre você. Por favor, informe os dados abaixo  :</Title>
          <ContainerInputs>
            <ContainerInput>
              <Input typeIcon="Feather" keyboardType='visible-password' icon="user" name="phone" value={name} onChangeText={setName} placeholder="Informe seu primeiro nome"></Input>
            </ContainerInput>
            <ContainerInput>
              <Input typeIcon="Feather" keyboardType='visible-password' icon="user" name="phone" value={lastName} onChangeText={setLastName} placeholder="Informe seu sobrenome "></Input>
            </ContainerInput>
            <ContainerInput>
              <Input typeIcon="FontAwesome" icon="id-card" name="" keyboardType='number-pad' value={cpf} onChangeText={setCpf} placeholder="Informe seu CPF "></Input>
            </ContainerInput>
            <ContainerGender>
              <PickerDDD mode="dialog" selectedValue={gender} onValueChange={(item) => setGender(item)}>
                <PickerItem label="Selecione seu sexo" value={''} />
                <PickerItem label="Masculino" value={'M'} />
                <PickerItem label="Feminino" value={'F'} />
                <PickerItem label="Outro" value={'outros'} />
              </PickerDDD>
            </ContainerGender>
          </ContainerInputs>
          <ContainerButton>
            <ButtonTouchable loading={false} disabled={gender == '' || name == '' || lastName == '' ||  cpf == '' ? true : false} onPress={()=> handleNextpage({route:'Address'})} >Continuar</ButtonTouchable>
          </ContainerButton>
        </SubContainer>
      </ScrollView>
    </Container >

  );
}

export default PersonalData;
