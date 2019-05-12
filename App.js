import React, {Component} from "react"
import NavContainer from "./NavContainer"
import {View, Alert, Text, Platform, StatusBar} from "react-native"
// import colors from "./colors"
import TheGoodStuff from "./TheGoodStuff"
import { createAppContainer, createStackNavigator } from "react-navigation";
import {
  MenuProvider, 
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger} from "react-native-popup-menu"

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View
    style={{
      height: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
    }}
  >
    <StatusBar barStyle="light-content" translucent backgroundColor="#000" {...props} />
  </View>
);

// const Navigator = createStackNavigator({
//   TheGoodStuff: {
//     screen: TheGoodStuff
//   }
// });

// const Container = createAppContainer(Navigator)

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MyStatusBar />
        <MenuProvider>
          <NavContainer/>
        </MenuProvider>
      </View>
    );
  }
}

export default App;