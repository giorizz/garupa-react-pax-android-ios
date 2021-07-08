import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  background: ${({theme}) => theme.colors.background};
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

export const Content = styled.View`
  max-width: 100%;
  background-color: ${({theme}) => theme.colors.light};
  padding: 0 10px;
  border-radius: 15px;

  align-items: center;
  justify-content: center;
`;

export const InitialLogo = styled.View`
  flex-grow: 2;
`;

export const LogoImage = styled.Image`
  flex: 1;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFValue(20)}px;
`;

export const CreateAccount = styled.View`
  width: 100%;
  flex-direction: row;
  border-top-width: 1px;
  border-color: ${({theme}) => theme.colors.text};
  margin: 24px;

  align-items: center;
  justify-content: center;
`;

export const CreateAccountText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;

export const CreateAccountButton = styled.TouchableWithoutFeedback``;

export const CreateAccountButtonText = styled.Text`
  padding-left: 5px;
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.primary};
`;
export const ContainerInput = styled.View`
  margin: 10px 0px;
`;
