import React, { useState } from 'react'
import { Text, View, Alert, TouchableWithoutFeedback, Keyboard, Image } from 'react-native'
import { TextInputComponent } from '../../Components/TextInput';
import { ButtonComponents } from '../../Components/ButtonComponents';
import { styled } from './style';
import { useNavigation } from '@react-navigation/native';
import Banner from '../../Assets/crunchy-Logo-Titulo1.png'

export function Login() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navegando = useNavigation();

  const handleEmail = (value: string) => {
    setEmail(value)
    console.log('Valor do email: ' + value)
  }

  const handlePassword = (value: string) => {
    setPassword(value)
    console.log('Valor da senha: ', value);
  }

  const handleLogin = () => {
      navegando.navigate("StackTabsPages", { name: "Login" })
    
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styled.container}>
        <Image
        style={{}}
        source={Banner}
        alt='logo crunchyroll'
        />

        <TextInputComponent
          recebendoFuncao={handleEmail}
          recebendoValue={email}
          recebendoPlaceHolder="Digite seu email..."
        />

        <TextInputComponent
          recebendoFuncao={handlePassword}
          recebendoValue={password}
          recebendoPlaceHolder="Digite sua senha..."
          recebendoTipoDoInput={true}
        />

        <ButtonComponents title='Entrar' recebendoFuncao={handleLogin} />

      </View>
    </TouchableWithoutFeedback>
  )
}