import React from 'react'
import { Alert, Text, View } from 'react-native'
import { styled } from './style';
import { useNavigation } from '@react-navigation/native';

export function Listas() {

  const navegando = useNavigation();

  const handleLogout = () =>{
    navegando.navigate("StackLogin", { name: "Login" })
  }

  return (
    <View style={styled.container}>
      <Text style={styled.title}>
        Estamos na pagina Listas!
      </Text>
    </View>
  )
}