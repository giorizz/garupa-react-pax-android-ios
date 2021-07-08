import React from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

import splashImage from '../../assets/images/splash.json';

import {Container} from './styles';

const Splash = (): JSX.Element => {
  const navigation = useNavigation();

  const handleNextpage = ({route, params}: IRouteProps) => {
    navigation.navigate(route, params);
  };

  return (
    <Container>
      <LottieView
        source={splashImage}
        autoPlay
        speed={0.3}
        loop={true}
        onAnimationFinish={() => handleNextpage({route: 'Welcome'})}
      />
    </Container>
  );
};

export default Splash;
