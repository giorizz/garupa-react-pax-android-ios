import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import colors from '../../../global/colors';

export const Container = styled.View`
  flex: 1;
  padding: 0px 10px;
`;
export const ContainerIcon = styled.View`
  /* flex: 1; */
  height: 30%;
  justify-content: center;
  align-items: center;
`;
export const ContainerCode = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const ContainerTitle = styled.View`
  justify-content: center;
  align-items: center;
`;
export const ContainerIconRefresh = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ContainerButton = styled.View`
  /* flex:1; */
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: center;
`;
export const ContainerCodeInput = styled.View`
  flex: 1;

  /* background-color: red; */
`;

export const MaterialIcon = styled(MaterialIcons)`
  color: ${colors.background_garupa};
`;

export const InputCode = styled.TextInput`
  width: 100px;
`;

const InputText = styled.TextInput`
  background: #dddddd;
  color: ${colors.background_garupa};
  padding: 10px;
  height: 54px;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 10px;
`;

InputText.defaultProps = {
  placeholderTextColor: colors.text,
};
export const Title = styled.Text`
  text-align: center;
  font-size: 16px;
  font-family: 'RobotoSlab-Medium';
  margin-bottom: 20px;
`;
export const TitleResend = styled.Text`
  font-size: 16px;
  color: ${colors.background_garupa};
  font-weight: bold;
  font-family: 'RobotoSlab-Medium';
  /* margin-bottom: 20px; */
`;

export {InputText};
