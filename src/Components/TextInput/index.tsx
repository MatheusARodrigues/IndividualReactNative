import React from 'react'
import { TextInput } from 'react-native'
import { styled } from './style'

type PropsComponent = {
  recebendoPlaceHolder?: string;
  recebendoValue: string;
  recebendoFuncao: (value: string) => void;
  recebendoTipoDoInput?: boolean;
  recebendoBackgroundColor?: string;
}

export function TextInputComponent({
  recebendoFuncao, 
  recebendoPlaceHolder, 
  recebendoValue,
  recebendoTipoDoInput,
  recebendoBackgroundColor
  }: PropsComponent) {

  return (
    <TextInput
      onChangeText={recebendoFuncao}
      value={recebendoValue}
      style={[styled.styleInput, { 
        backgroundColor: recebendoBackgroundColor ? recebendoBackgroundColor : '#b3b3b3'
       }]}
      placeholder={recebendoPlaceHolder ? recebendoPlaceHolder : "Placeholder default"}
      secureTextEntry={recebendoTipoDoInput}
    />
  )
}
