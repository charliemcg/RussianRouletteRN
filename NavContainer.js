import { createAppContainer, createStackNavigator } from "react-navigation";
import React, {Component} from "react";
import { Text, Alert } from "react-native";
import TheGoodStuff from "./TheGoodStuff";
import PrivacyPolicy from "./PrivacyPolicy"

const Navigator = createStackNavigator({
  TheGoodStuff: {
    screen: TheGoodStuff,
    // navigationOptions: {
    //   header: null
    // }
  },
  PrivacyPolicy: {
    screen: PrivacyPolicy,
    navigationOptions: {
      title: "Privacy Policy",
      headerTintColor: "#000",
      // headerStyle: {
      //   backgroundColor: "#000"
      // },
    }
  }
});

export default (NavContainer = createAppContainer(Navigator));
