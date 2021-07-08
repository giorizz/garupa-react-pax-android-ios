import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import InputSelfie from '../../../components/InputSelfie'
import { Title, Container } from './style';
import Menu from '../Menu';





const Maps: React.FC = () => {

    const navigation = useNavigation();


    const handleNextpage = ({ route, params }: IRouteProps) => {
        navigation.navigate(route, params);

    }

    return (
        <Container>
            <Menu />
            <Title>Maps</Title>
        </Container>
    )
}
export default Maps;
