import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { View, Text } from 'react-native';
import HomePage from './src/Pages/HomePage';
import NewsPage from './src/Pages/NewsPage';
import SearchPage from './src/Pages/SearchPage';
import CategoryPage from './src/Pages/CategoryPage';
import DetailsPage from './src/Pages/DetailsPage';

const HomeStack = createStackNavigator({
    Home: HomePage,
    Details: DetailsPage
  });
  
  export default createAppContainer(createBottomTabNavigator(
    {
      Home: HomeStack,
    },
  ));