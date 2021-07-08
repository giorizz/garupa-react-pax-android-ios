import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${RFPercentage(20)}px;
`;

export const GoogleButton = styled.View`
  width: ${RFValue(76)}px;
  height: ${RFValue(76)}px;
  background: ${({theme}) => theme.colors.light};
  border-radius: ${RFValue(38)}px;
  margin-right: 15px;
  justify-content: center;
  align-items: center;
`;

const GoogleLogo = styled.Image`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
`;

GoogleLogo.defaultProps = {
  resizeMode: 'contain',
};

export {GoogleLogo};
