import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import color from '../global/colors';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
export const Container = styled.View`
  flex:1;`;
export const ContainerImage = styled.View`

 flex-direction: row;
 justify-content: center;
  align-items: center;
  padding: 10px;

  
`;
export const ContainerName = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
  
`;
export const ContainerStars = styled.View`
    flex-direction:row;
    justify-content: center;
    align-items: center;
`;
export const Title = styled.Text`
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.bold};
    color:${({ theme }) => theme.colors.error}; ;
    margin-bottom: 4px;
  
`;

export const FontAwesomeIcons = styled(FontAwesome)`
  color: ${({ theme }) => theme.colors.primary};;

`;
export const MaterialIcons = styled(MaterialIcon)`
  color: ${({ theme }) => theme.colors.primary};;
 
  
`;
export const Stars = styled(FontAwesome)`
  color: ${({ theme }) => theme.colors.primary};;
  margin:0px 2px
 
  
`;
export const ImageIcon = styled.Image`
width: 50px;
height: 50px;
  
`;


const Image = styled.Image`
  width: 80px;
  height: 80px;
  
`;
Image.defaultProps = {
    resizeMode: 'contain'
}


export { Image }