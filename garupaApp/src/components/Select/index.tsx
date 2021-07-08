import React from 'react';
import {useWindowDimensions, Text, StyleSheet} from 'react-native';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';

import {Container, Category, FeatherIcons, AnimetedContainer} from './styles';

interface Props {
  title: string;
}

type AnimetedGHContext = {
  startTop: number;
};

const SPRING_CONFIG = {
  daming: 80,
  overshootClamping: true,
  restDisplacementThreshold: 0.1,
  restSpeedThreshold: 0.1,
  stiffness: 500,
};

const Select = ({title}: Props): JSX.Element => {
  const dimensions = useWindowDimensions();

  const top = useSharedValue(dimensions.height);

  const style = useAnimatedStyle(() => {
    return {
      top: withSpring(top.value, SPRING_CONFIG),
    };
  });

  const gestureHandler = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    AnimetedGHContext
  >({
    onStart(_, ctx) {
      ctx.startTop = top.value;
    },
    onActive(event, ctx) {
      top.value = ctx.startTop + event.translationY;
    },
    onEnd() {
      if (top.value > dimensions.height / 2 + 200) {
        top.value = dimensions.height;
      } else {
        top.value = dimensions.height / 2;
      }
    },
  });

  const styles = StyleSheet.create({
    AnimetedView: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 16,
      marginRight: 16,
    },
  });

  return (
    <>
      <Container
        onPress={() => {
          console.log('Apertou aqui');
          top.value = withSpring(dimensions.height / 2, SPRING_CONFIG);
        }}>
        <Category>{title}</Category>
        <FeatherIcons name="chevron-down" />
      </Container>
      <AnimetedContainer onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.AnimetedView, style]}>
          <Text>AnimetedView</Text>
        </Animated.View>
      </AnimetedContainer>
    </>
  );
};

export default Select;
