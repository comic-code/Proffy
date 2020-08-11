import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import GiveClassesBgImage from '../../assets/images/give-classes-background.png';
import styles from './styles';

export default function GiveClasses() {

  const { goBack } = useNavigation();
  
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='contain'
        style={styles.content}
        source={GiveClassesBgImage}
      >
        <Text style={styles.title}>
          Quer ser um professor?
        </Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma web.
        </Text>
      </ImageBackground>
      <RectButton style={styles.okButton} onPress={goBack}>
        <Text style={styles.okButtonText}>
          Tudo bem
        </Text>
      </RectButton>
    </View>
  )
}