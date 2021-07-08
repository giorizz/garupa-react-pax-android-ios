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
	margin:6px 0px;
	
`;
export const ContainerIcon = styled.View`
	flex:1;
	/* height: 30%; */
	justify-content:center;
	align-items:center;
	
 
`;
export const ContainerInputs = styled.View`
	/* background: blue; */	
`;
export const ContainerGender = styled.View`

	border:1px solid ${colors.background_garupa};
	border-radius: 10px;
  margin-bottom: 20px;

	
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

 const PickerDDD = styled(Picker)`
 

`;
PickerDDD.defaultProps ={
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
const InputTell = styled.TextInput`
	background:#DDDDDD;
	color: ${colors.background_garupa};
 	padding:10px;
	 height: 54px;
	margin-top: 10px;
	font-size:16px;
	border-radius: 10px;
	
`;
InputTell.defaultProps = {
	placeholderTextColor: colors.text,
}
export const ContainerTerms = styled.View`

	flex-direction: row;
	align-items: center;
	margin: 10px 0px;
`
const Check = styled(CheckBox)`
 color: #000;

`
Check.defaultProps = {
	tintColors: { true: colors.background_garupa, false: colors.background_garupa }
}

export const Terms = styled.Text`
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: ${colors.background_garupa};

`
export const ContainerButton = styled.View`
	flex:1;
	margin-bottom: 10px;
`

export { PickerItem, InputTell, Check, PickerDDD };
