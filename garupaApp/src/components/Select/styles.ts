import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

type AnimetedView = typeof Animated.View;

interface IAnimetedViewProps extends AnimetedView {
  children: Element;
  top: number;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({theme}) => theme.colors.light};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  padding: 18px 16px;
`;

export const Category = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;

export const FeatherIcons = styled(FeatherIcon)`
  margin-right: 16px;
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`;

export const AnimetedContainer = styled(PanGestureHandler)`
  flex: 1;
`;

export const AnimetedView = styled(Animated.View)<IAnimetedViewProps>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: ${props => props.top}px;
  background-color: ${({theme}) => theme.colors.light};
  box-shadow: 0 2px 2px ${({theme}) => theme.colors.dark};
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
