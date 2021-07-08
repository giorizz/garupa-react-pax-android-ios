import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import color from '../global/colors';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"

export const ButtonTouchable = styled(TouchableOpacity)`
  margin-right: 10px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const TitleCancel = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color:${({ theme }) => theme.colors.light}; ;
  
`;
