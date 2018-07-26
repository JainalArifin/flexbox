import React from 'react'
import { createStackNavigator } from 'react-navigation'

// pages or screen
import HomeScreen from './src/screens/Home'
import Detail from './src/screens/Detail/index.js';

const routes = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    Detail: {
        screen: Detail
    },
},{
    initialRouteName: 'Home'
},{ headerMode: 'screen' })

export default routes