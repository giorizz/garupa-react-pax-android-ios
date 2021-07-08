import React, { ReactNode } from 'react';
import {
  createDrawerNavigator,
  DrawerContentOptions,
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView
} from '@react-navigation/drawer';

import { Container, ContainerImage, Image, ContainerName, ContainerStars, Stars, ImageIcon, FontAwesomeIcons, Title } from './styles.drawer';
import Maps from '../screens/Auth/Maps';
import cam from '../assets/cam.png';
import theme from '../global/styles/theme';
import Help from '../screens/Help';
const { Navigator, Screen } = createDrawerNavigator();


const OptionsDrawerContent: DrawerContentOptions = {
  itemStyle: {
    padding: 0,
    margin: 0,
  },
  labelStyle: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.bold,
    padding: 0,
    margin: 0,


  },
}
const getIcon: React.FC<any> = (name: string, typeIcon: string) => {
  switch (typeIcon) {
    case "Maps":
      return (<ImageIcon source={""} />)
    default:
      return <FontAwesomeIcons name={name} size={25} />
  }

}

const DrawerContent = (props: any) => {
  return (
    <Container>
      <ContainerImage>
        <Image source={cam} />
        <ContainerName>
          <Title onPress={() => props.navigation.navigate("Welcome")}>Yuri</Title>
          <ContainerStars>
            <Stars name="star" ></Stars>
            <Stars name="star" ></Stars>
            <Stars name="star" ></Stars>
            <Stars name="star" ></Stars>
            <Stars name="star" ></Stars>

          </ContainerStars>
        </ContainerName>
      </ContainerImage>
      <DrawerContentScrollView>
        <DrawerItem label="Chamar Garupa" icon={() => getIcon('car', 'FontAwesomeIcons')} {...props} />
        <DrawerItem label="Garupa food" icon={() => getIcon('sign-out', 'FontAwesomeIcons')} {...props} />
        <DrawerItem label="Minhas corridas" icon={() => getIcon('sign-out', 'FontAwesomeIcons')} {...props} />
        <DrawerItem label="Motoristas favoritos" icon={() => getIcon('sign-out', 'FontAwesomeIcons')} {...props} />
        <DrawerItem label="Garupa business" icon={() => getIcon('sign-out', 'FontAwesomeIcons')} {...props} />
        <DrawerItem label="Endereços favoritos" icon={() => getIcon('sign-out', 'FontAwesomeIcons')} {...props} />
        <DrawerItem label="Opções de pagamento" icon={() => getIcon('sign-out', 'FontAwesomeIcons')} {...props} />
        <DrawerItem label="Indique e ganhe" icon={() => getIcon('sign-out', 'FontAwesomeIcons')} {...props} />
        <DrawerItem label="Seja motorista" icon={() => getIcon('sign-out', 'FontAwesomeIcons')} {...props} />
        <DrawerItem label="Suporte e ajuda" onPress={() => props.navigation.navigate("Help")} icon={() => getIcon('sign-out', 'FontAwesomeIcons')} {...props} />
        <DrawerItem label="Sair" icon={() => getIcon('sign-out', 'FontAwesomeIcons')} {...props} />
      </DrawerContentScrollView>
    </Container >
  )
}

const DrawerRoutes: React.FC = () => {
  return (
    <Navigator drawerContent={(props) => <DrawerContent {...props} />} drawerContentOptions={OptionsDrawerContent} initialRouteName="Selfie">
      <Screen name="Maps" component={Maps} />
      <Screen name="Food" component={Maps} />
      <Screen name="Races" component={Maps} />
      <Screen name="FavorDrivers" component={Maps} />
      <Screen name="Business" component={Maps} />
      <Screen name="FavorAddress" component={Maps} />
      <Screen name="OptionsPay" component={Maps} />
      <Screen name="Indicate" component={Maps} />
      <Screen name="Driver" component={Maps} />
      <Screen name="Help" component={Help} />
    </Navigator>
  );
};

export default DrawerRoutes;
