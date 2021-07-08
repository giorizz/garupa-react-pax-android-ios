import styled from 'styled-components/native';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 0 10px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const LockIcon = styled(FontistoIcon)`
  color: ${({theme}) => theme.colors.primary};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  margin-top: 20px;
`;
