import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import InputSelfie from '../../../components/InputSelfie'
import {
    Container,
    ContainerButton,
    ContainerIcon,
    FontAwesomeIcon,
    Title,
    SubTitle

} from './styles';

import backgrounGarupa from "../../../assets/launchScreen.png"
import Button from "../../../components/GlobalButton"


const Success: React.FC = () => {

    const navigation = useNavigation();


    const handleNextpage = ({ route, params }: IRouteProps) => {
        navigation.navigate(route, params);
    }

    return (
        <Container source={backgrounGarupa}>
            <ContainerIcon>
                <FontAwesomeIcon name="check" size={80} />
                <Title>BEM VINDO AO GARUPA !</Title>
                <SubTitle>Tudo pronto para começar! </SubTitle>
                <ContainerButton>
                    <Button onPress={() => handleNextpage({route:'Welcome'})}>CHAMAR GARUPA</Button>
                </ContainerButton>
            </ContainerIcon>
        </Container>
    )
}
export default Success;
