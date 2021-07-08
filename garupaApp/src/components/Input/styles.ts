import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
// import theme from '../../global/styles/theme';

import themeColor from '../../global/styles/theme';

interface IconProps {
  focusable: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: ${RFPercentage(9)}px;
  padding: 0 16px;
  background-color: ${({theme, focusable}) =>
    focusable ? theme.colors.light : theme.colors.desabled};
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  border: 1px solid
    ${({theme, focusable}) =>
      focusable ? theme.colors.primary : theme.colors.desabled};
`;
const TextInput = styled.TextInput`
  flex: 1;
  color: ${({theme}) => theme.colors.primary};
  background-color: ${props =>
    props.focusable ? props.theme.colors.light : props.theme.colors.desabled};
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

TextInput.defaultProps = {
  placeholderTextColor: themeColor.colors.text,
};

export const FeatherIcons = styled(FeatherIcon)<IconProps>`
  margin-right: 16px;
  color: ${({theme, focusable}) =>
    focusable ? theme.colors.primary : theme.colors.text};
`;

export const FontAwesomeIcons = styled(FontAwesome)<IconProps>`
  margin-right: 16px;
  color: ${({theme, focusable}) =>
    focusable ? theme.colors.primary : theme.colors.text};
`;
export const EntypoIcons = styled(Entypo)<IconProps>`
  margin-right: 16px;
  color: ${({theme, focusable}) =>
    focusable ? theme.colors.primary : theme.colors.text};
`;

export {TextInput};
