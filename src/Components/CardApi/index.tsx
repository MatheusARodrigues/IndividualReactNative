import React from 'react'
import { FlatList, View, Text, Image, ImageSourcePropType } from 'react-native'
import { LoadRepos } from './Footer';
import { styled } from './style';

interface PropsReposMockado {
  image: ImageSourcePropType;
  id: string | number;
}

interface PropsApiComponent {
  isLoading: boolean;
  repositorioMockado?: PropsReposMockado[];
}

export function CardApi({ isLoading, repositorioMockado}: PropsApiComponent) {

  return (

    <>
        <FlatList
          style={{ height: 300 }}
          horizontal={true}
          data={repositorioMockado}
          // keyExtractor={item => item.id.toString()}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) =>
            <View style={styled.boxArray}>
                <Image style={styled.logo} source={item.image} alt="banner" />
            </View>
          }
        />
    </>
  )
}