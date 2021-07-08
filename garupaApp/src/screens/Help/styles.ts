import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 0 16px;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const LockIcon = styled(MaterialIcons)`
  color: ${({theme}) => theme.colors.primary};
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  margin-top: 20px;
`;

export const TextArea = styled.View`
  width: 100%;
  height: ${RFPercentage(30)}px;
  font-size: ${RFValue(20)}px;
  margin: 25px 0;
  padding: 0 10px;
  border: 1.5px solid ${({theme}) => theme.colors.primary};
  border-radius: 15px;
  background-color: ${({theme}) => theme.colors.light};
`;

export const TextInput = styled.TextInput`
  justify-content: flex-start;
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFValue(20)}px;
  border-radius: 15px;
`;

export const TouchableText = styled.TouchableWithoutFeedback`
  flex: 1;
`;
