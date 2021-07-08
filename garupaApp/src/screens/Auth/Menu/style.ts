import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather'
export const Title = styled.Text`
  font-size: 20px;
`;
 const Button = styled.TouchableHighlight`
  width: 100%;
  height: 9%;
  background-color: ${({theme}) => theme.colors.transparent};
`;
Button.defaultProps = {
  underlayColor:'none'
}
export const FeatherIcon = styled(Feather)`
  color: ${({theme}) => theme.colors.primary};
  margin-left: 10px;
  margin-top: 10px;
  
`;

export {Button}