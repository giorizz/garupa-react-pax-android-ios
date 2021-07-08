import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 10px;

  align-items: center;
  justify-content: center;
`;

export const InitialLogo = styled.View`
  flex-grow: 2;
`;

export const LogoImage = styled.Image`
  flex: 1;
  /* width: ${RFValue(240)}px;
  height: ${RFValue(240)}px; */
`;





