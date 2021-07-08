
import React, { useState, useEffect } from 'react';
import {Image, ContainerImage } from './styles';
import cam from "../../assets/cam.png"

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Alert, PermissionsAndroid, ImageEditor } from 'react-native';
import { SetStateAction } from 'react';
interface IInputImageProps {
  setPhoto: any;
  photo: any;
}






const InputSelfie = ({ setPhoto, photo = '' }: IInputImageProps): JSX.Element => {

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true
      } else {
        return false
      }
    } catch (err) {
      console.warn(err);
      return false
    }
  };
  const loadCamera = () => {
    let p = ''
    launchCamera({
      mediaType: "photo",
      cameraType: "front",
      maxWidth: 200,
      maxHeight: 200,
      includeBase64: true
    }, (response) => {

      if (response.didCancel) {
        Alert.alert("Aviso", "Você cancelou o uso da camera")
      } else if (response.errorCode || response.errorMessage) {
        Alert.alert("Aviso", "Algum erro ocorreu , tente novamente")
      } else {
        setPhoto(response.assets[0].uri)
      }

    })
  }

  const loadGalery = () => {
    launchImageLibrary({
      mediaType: "photo",
      maxWidth: 200,
      maxHeight: 200,
      includeBase64: true
    }, (response) => {
      if (response.didCancel) {
        Alert.alert("Aviso", "Você cancelou a galeria")
      } else if (response.errorCode || response.errorMessage) {
        Alert.alert("Aviso", "Algum erro ocorreu , tente novamente!")
      } else {
        setPhoto(response.assets[0].uri)
      }
    })
  }
  const handleLoadImage = async () => {
    let isAccept = await requestCameraPermission();
    if (isAccept) {
      Alert.alert("Selecione", "Qual forma deseja inserir a imagem ?",
        [
          { text: "Cancelar", onPress: () => null },
          { text: "Camera", onPress: loadCamera },
          { text: "Galeria", onPress: loadGalery },
        ])
    } else {
      Alert.alert("Aviso", "Não foi autorizado por parte do usuario a utilização da camera")
    }

  }


  return (

    <ContainerImage onPress={handleLoadImage}>
      {photo == '' ?
        <Image source={cam}  ></Image>
        :
        <Image source={{ uri: photo }} ></Image>
      }
    </ContainerImage>

  )
};

export default InputSelfie;
