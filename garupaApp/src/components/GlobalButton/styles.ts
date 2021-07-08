import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import { IButtonProps } from '.';

export const ButtonTouchable = styled(TouchableOpacity)<IButtonProps>`
  width: 100%;

  height: ${RFValue(55)}px;
  background: ${(props) =>  props.disabled ? props.theme.colors.button_desabled : props.secondary ?  props.theme.colors.light :props.theme.colors.button};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const DisabledButtonTouchable = styled(TouchableOpacity)`
  width: 100%;
  height: ${RFValue(55)}px;
  background: ${({theme}) => theme.colors.desabled};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const SecondaryButtonTouchable = styled(RectButton)`
  width: 100%;
  height: ${RFValue(55)}px;
  background: ${({theme}) => theme.colors.light};
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const Title = styled.Text<IButtonProps>`
  font-family: ${({theme}) => theme.fonts.bold};
  color:  ${(props) =>   props.disabled ? props.theme.colors.text : props.secondary ?  props.theme.colors.primary :props.theme.colors.light};
  font-size: ${RFValue(18)}px;
`;

export const SecondaryTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFValue(18)}px;
`;

export const TitleDisabled = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(18)}px;
`;

export const IconReload = styled(Ionicons)`
  color: ${({theme}) => theme.colors.text};
`;
