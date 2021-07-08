import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import colors from '../../../global/colors';
import theme from '../../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerTitle = styled.View`
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;

export const ContainerSelfie = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.error};;
  text-align: center;
  padding:0px 10px;
  font-size: 17px;
  font-weight: bold;
`;
export const ContainerButton = styled.View`  
    padding:0px 15px   

`;

export const ContainerText = styled.View`  
    flex:1;
    justify-content: center;
    align-items: center;

`;
export const TextWarning = styled.Text`
    text-align: center;
    width: 80%;
    font-size: 16px;
    font-weight: bold;
`;
