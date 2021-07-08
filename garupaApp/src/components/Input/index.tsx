import React, {useRef, useState, useEffect} from 'react';
import {
  NativeSyntheticEvent,
  TextInput as input,
  TextInputProps,
} from 'react-native';

import {
  Container,
  TextInput,
  FeatherIcons,
  FontAwesomeIcons,
  EntypoIcons,
} from './styles';

interface IInputProps extends TextInputProps {
  name: string;
  icon: string;
  typeIcon: string;
  isFocus?: boolean;
  showEye?: boolean;
}


const Input = ({ name, icon, typeIcon,showEye, ...rest }: IInputProps): JSX.Element => {
  const [focus, setFocus] = useState(false)
  const [security , setSecurity] = useState(false)
  const refInput = useRef<input>(null)

  // a font family do placeholder modifica por causa  de um bug no react, esse useEffect impede de ocorrer a mudança
  useEffect(() => {
    refInput.current?.setNativeProps({
      style: {
        fontFamily: 'RobotoSlab-SemiBold',
      },
    });
  }, [security]);

  return (
    <Container focusable={focus}>
      {typeIcon == 'Feather' && (
        <FeatherIcons focusable={focus} name={icon} size={20} />
      )}
      {typeIcon == 'FontAwesome' && (
        <FontAwesomeIcons focusable={focus} name={icon} size={20} />
      )}
      {typeIcon == 'Entypo' && (
        <EntypoIcons focusable={focus} name={icon} size={20} />
      )}

      {/* Foi implementada uma gambiarra o visible-password evita que emojis apareçam no teclado
    só q eles não podem ser implementados no campo password pq impede de ficar rasurado para qu
    questoes de segurança
*/}
      <TextInput
        secureTextEntry={security}
        focusable={focus}
        ref={refInput}
        keyboardType={
          security == false && showEye ? 'visible-password' : rest.keyboardType
        }
        onBlur={e =>
          e._dispatchInstances.memoizedProps.value === '' && setFocus(false)
        }
        onFocus={() => setFocus(true)}
        keyboardAppearance="light"
        {...rest}
      />

      {/* Para inputs do tipo password apenas passe o parametro showEye
        Lembrando sem passar o secureTextEntry pois ele sera controlado pelo eye
    */}
      {showEye ? (
        !security ? (
          <EntypoIcons
            focusable={focus}
            onPress={() => setSecurity(true)}
            name="eye"
            size={30}
          />
        ) : (
          <EntypoIcons
            focusable={focus}
            onPress={() => setSecurity(false)}
            name="eye-with-line"
            size={30}
          />
        )
      ) : null}
    </Container>
  );
};

export default Input;
