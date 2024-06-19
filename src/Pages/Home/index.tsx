import React, { useState } from 'react'
import {Text, View, Image, ScrollView } from 'react-native'
import { styled } from './style';
import { ArrayRecomendacoes } from '../../Mock/ArrayRecomendacoes';
import { ArraySuaLista } from '../../Mock/ArraySuaLista';
import { CardApi } from '../../Components/CardApi';
import Banner from '../../Assets/kaijuBanner.jpg'


export function Home() {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <ScrollView>
    <View style={styled.container}>
      <View style={styled.banner}>
        <Text style={{fontSize: 30, color: 'white', alignSelf: 'center'}}>Em destaque</Text>
        <Image 
        style={{
          objectFit:"cover",
          width: 'auto'
        }}
        source={Banner}
        alt='Poster de Anime'/> 
      </View>

      <Text style={{fontSize: 30, color: 'white',}}>Recomendações</Text>
      <CardApi
        isLoading={isLoading}
        repositorioMockado={ArrayRecomendacoes}
      />

      <Text style={{fontSize: 30, color: 'white',}}>Sua Lista</Text>
      <CardApi
      isLoading={isLoading}
      repositorioMockado={ArraySuaLista}
      />

      <View>
      <Text style={{fontSize: 30, color: 'white',}}>Fim da Página!</Text>
      </View>

    </View>
    </ScrollView>
  )
}
