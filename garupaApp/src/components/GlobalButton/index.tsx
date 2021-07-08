import React, {ReactNode} from 'react';
import {TouchableOpacityProps} from 'react-native';

import {
  ButtonTouchable,
  Title,
  IconReload,
  DisabledButtonTouchable,
} from './styles';

export interface IButtonProps extends TouchableOpacityProps {
  children?: ReactNode;
  loading?: boolean;
  secondary?: boolean;
  disabled?: boolean;
}

const Button = ({children, loading, ...rest}: IButtonProps): JSX.Element =>
  loading ? (
    <DisabledButtonTouchable {...rest}>
      <IconReload name="reload" size={28} />
    </DisabledButtonTouchable>
  ) : (
    <ButtonTouchable {...rest}>
      <Title {...rest}>{children}</Title>
    </ButtonTouchable>
  );

export default Button;
