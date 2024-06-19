import React from 'react'
import {Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../Pages/Home';
import { Profile } from '../Pages/Profile';
import { Listas } from '../Pages/Listas';
import { Simulcasts } from '../Pages/Simulcasts';
import { Catalogo } from '../Pages/Catalogo';
import Icon from '@expo/vector-icons/Ionicons';

const TabBatatinha = createBottomTabNavigator();

export function BottomTabsRoutes() {

  return (
    <TabBatatinha.Navigator
    
    screenOptions={{tabBarStyle:{
      backgroundColor:'black',
      height:60
  }, headerStyle:{
      backgroundColor: 'black',

  }, tabBarLabel: '',
  }}>
      <TabBatatinha.Screen name='TabsHome' component={Home} 
      options={{
        headerTitle: "Home",
        headerTintColor: '#fb9b04',
        headerStyle:{
          backgroundColor: 'black',
          borderColor: 'black',
        },
        tabBarIcon: ({  focused }) => (
        <>
          <Icon name="home" color={focused ? '#fb9b04' : '#fff'} size={20} />
          <Text  style={{fontSize:10, color: focused ?'#fb9b04' : '#fff'}}> Home</Text>
        </>
        ),
      }}/>


      <TabBatatinha.Screen name='TabsListas' component={Listas} 
      options={{
        headerTitle: "Listas",
        headerTintColor: '#fb9b04',
        tabBarIcon: ({  focused}) => (
        <>
          <Icon name="bookmarks-outline" color={focused ? '#fb9b04' : '#fff'} size={20} />
          <Text style={{fontSize:10, color: focused ?'#fb9b04' : '#fff'}}> Listas</Text>
        </>
        ),
        
      }}/>


      <TabBatatinha.Screen name='TabsSimulcasts' component={Simulcasts} 
      options={{
        headerTitle: "Simulcasts",
        headerTintColor: '#fb9b04',
        tabBarIcon: ({  focused }) => (
          <>
          <Icon name="planet-outline" color={focused ? '#fb9b04' : '#fff'} size={20} />
          <Text style={{fontSize:10, color: focused ?'#fb9b04' : '#fff'}}> Simulcasts</Text>
        </>
        ),
        
      }}/>


      <TabBatatinha.Screen name='TabsCatalogo' component={Catalogo} 
      options={{
        headerTitle: "Catalogo",
        headerTintColor: '#fb9b04',
        tabBarIcon: ({  focused}) => (
          <>
          <Icon name="albums-outline" color={focused ? '#fb9b04' : '#fff'} size={20} />
          <Text style={{fontSize:10, color: focused ?'#fb9b04' : '#fff'}}> Catálogo</Text>
        </>
        ),
        
      }}/>


      <TabBatatinha.Screen name='TabsProfile' component={Profile} 
      options={{
        headerTitle: "Profile",
        headerTintColor: '#fb9b04',
        tabBarIcon: ({ focused}) => (
        <>
          <Icon name="person-outline" color={focused ? '#fb9b04' : '#fff'} size={20} />
          <Text  style={{fontSize:10, color: focused ?'#fb9b04' : '#fff'}}> Profile</Text>
        </>
        ),
        
      }}/>
    </TabBatatinha.Navigator>
  )
}