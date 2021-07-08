import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import InputSelfie from '../../../components/InputSelfie'
import {
    Container,
    ContainerTitle,
    TextWarning,
    ContainerText,
    ContainerButton,
    Title,
    ContainerSelfie

} from './styles';

import Button from "../../../components/GlobalButton"


const Selfie: React.FC = () => {
    const [ddd, setDdd] = useState<any>('');
    const [phone, setPhone] = useState<string>('');
    const [photo, setPhoto] = useState();
    const [loading, setLoading] = useState<boolean>(false);
    const navigation = useNavigation();


    const handleNextpage = ({ route, params }: IRouteProps) => {
        navigation.navigate(route, params);
    }

    return (
        <Container>
            <ContainerTitle>
                <Title>Obrigado por fazer parte do Garupa! Pressione a câmera para tirar sua foto de perfil  </Title>
            </ContainerTitle>
            <ContainerSelfie>
                <InputSelfie photo={photo} setPhoto={setPhoto}></InputSelfie>
            </ContainerSelfie>
            <ContainerText>
                <TextWarning>Segurança para nós é uma questão importante.
                    As chamadas com a sua foto diminuem a possibilidade  de cancelamento
                    por parte dos motoristas.
                </TextWarning>
            </ContainerText>
            <ContainerButton>
                <Button disabled={photo == ''}>Criar Conta</Button>
            </ContainerButton>
        </Container>
    )
}
export default Selfie;
