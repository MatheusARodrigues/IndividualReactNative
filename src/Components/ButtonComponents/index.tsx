import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { styled} from './style';
import { PropsButton } from './type';

export function ButtonComponents({recebendoFuncao, title}: PropsButton) {

  return (
    <>
      <TouchableOpacity style={styled.button} onPress={recebendoFuncao}>
        <Text style={styled.textButton}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  )
}