import React, { useState, useEffect } from 'react';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import InputSelfie from '../../../components/InputSelfie'
import { FeatherIcon, Button } from './style';
import { INavigationProps } from '../types';


const Menu: React.FC = () => {
    const navigation = useNavigation<INavigationProps>();
    return (
        <Button onPress={() => navigation.openDrawer()}>
            <FeatherIcon name='menu' size={45} />
        </Button>
    )
}
export default Menu;
