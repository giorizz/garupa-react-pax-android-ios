import styled from 'styled-components/native';
import colors from "../../../global/colors";
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import theme from '../../../global/styles/theme';



export const Container = styled.View`
  flex: 1;
  padding: 0px 10px;
  
`;
export const SubContainer = styled.View`
	flex:1;
	justify-content:center;

`;
export const ContainerInput = styled.View`

	
`;
export const ContainerIcon = styled.View`
	flex:1;
	/* height: 30%; */
	justify-content:center;
	align-items:center;
	
 
`;
export const ContainerInputs = styled.View`
	/* background: blue;	 */
`;
export const ContainerSelect = styled.View`

	border:1px solid ${colors.background_garupa};
	border-radius: 10px;
  margin-bottom: 10px;

	
`;
export const Title = styled.Text`
  text-align: center;
  margin-bottom: 20px;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
`;

export const FeatherIcons = styled(FeatherIcon)`
	 color:${colors.background_garupa};
`;

 const InputPicker = styled(Picker)`
 

`;
InputPicker.defaultProps ={
	dropdownIconColor: theme.colors.primary,

}
const PickerItem = styled(Picker.Item)`
		color: ${colors.background_garupa};
		padding: 0;
		margin: 0;
`;

PickerItem.defaultProps = {
	style: {
		color: colors.background_garupa,
	}
}
export const ContainerButton = styled.View`
	flex:1;
	margin-bottom: 10px;
`

export { PickerItem,InputPicker };
