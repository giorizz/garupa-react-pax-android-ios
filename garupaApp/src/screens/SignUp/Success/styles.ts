import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import colors from '../../../global/colors';
import theme from '../../../global/styles/theme';


export const Container = styled.ImageBackground`
  flex: 1;
`;

export const ContainerButton = styled.View`  
  width: 90%;
  margin-top: 10px;
`;
export const ContainerIcon = styled.View`  
    flex:1;
    justify-content: center;
    align-items: center;

`;
export const FontAwesomeIcon = styled(FontAwesome)`  
    color: ${({theme}) => theme.colors.light};
`;
export const Title = styled.Text`  
  font-size: 17px;
  font-family: ${({theme}) => theme.fonts.medium};
  color:${({theme}) => theme.colors.light};
    
`;
export const SubTitle = styled.Text`  
font-family: ${({theme}) => theme.fonts.medium};
  color:${({theme}) => theme.colors.light}
`;

