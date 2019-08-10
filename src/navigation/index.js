import React from "react";
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation";
import Home from '../../components/home';
import Details from '../../components/details';
import Login from '../../components/login'

const AppNavigator = createStackNavigator({
  Home,
  Login,
  Details
});

const MainNavigation = createSwitchNavigator({
    App: AppNavigator
})

export default createAppContainer(MainNavigation);