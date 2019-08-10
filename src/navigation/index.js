import React from "react";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import Home from '../../components/home';
import Details from '../../components/details';

const AppNavigator = createStackNavigator({
  Home,
  Details
});

const MainNavigation = createSwitchNavigator({
    App: AppNavigator
})

export default createAppContainer(MainNavigation);