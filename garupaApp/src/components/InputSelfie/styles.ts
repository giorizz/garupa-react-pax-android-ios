import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import theme from '../../global/styles/theme';



export const ContainerImage = styled.TouchableHighlight`  
   width: 200px;
   height: 200px;
   justify-content: center;
   align-items: center;
  
`;
const Image = styled.Image`
   width: 200px;
   height: 200px;
   border-radius: 100px;
`;
Image.defaultProps = {
    resizeMode:'cover',

}

export { Image }