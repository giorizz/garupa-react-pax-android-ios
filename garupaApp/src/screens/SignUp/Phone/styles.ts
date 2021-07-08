import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import CheckBox from '@react-native-community/checkbox';
import colors from '../../../global/colors';
import theme from '../../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  padding: 0px 10px;
`;
export const SubContainer = styled.View`
	flex:1;
	justify-content:center;

`;
export const ContainerPhone = styled.View`
	margin:10px 0px;

`;
export const ContainerIcon = styled.View`
	height: 40%;
	justify-content:center;
	align-items:center;
`;
export const ContainerInputs = styled.View`
  /* background: blue; */
`;
export const ContainerDDD = styled.View`
	margin: 0%;
	padding:0%;
	border:1px solid ${colors.background_garupa};
	border-radius: 10px;
`;
export const Title = styled.Text`
  text-align: center;
  margin-bottom: 20px;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
`;

export const FontAwesomeIcon = styled(FontAwesome)`
  color: ${colors.background_garupa};
`;

const PickerDDD = styled(Picker)``;
PickerDDD.defaultProps = {
  dropdownIconColor: theme.colors.primary,
};
const PickerItem = styled(Picker.Item)`
  color: ${colors.background_garupa};
  padding: 0;
  margin: 0;
`;

PickerItem.defaultProps = {
  style: {
    color: colors.background_garupa,
  },
};
const InputTell = styled.TextInput`
  background: #dddddd;
  color: ${colors.background_garupa};
  padding: 10px;
  height: 54px;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 10px;
`;
InputTell.defaultProps = {
  placeholderTextColor: colors.text,
};
export const ContainerTerms = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`;
const Check = styled(CheckBox)`
  color: #000;
`;
Check.defaultProps = {
  tintColors: {true: colors.background_garupa, false: colors.background_garupa},
};

export const Terms = styled.Text`
  font-size: 16px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: ${colors.background_garupa};
`;
export const ContainerButton = styled.View`
  flex: 1;
  margin-bottom: 10px;
`;

export {PickerItem, InputTell, Check, PickerDDD};
