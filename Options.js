import React, { Component } from "react";
import { Text, Alert } from "react-native";
import Icon from "react-native-vector-icons/SimpleLineIcons";
import email from "react-native-email";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";

const EMAIL = "violenthoboenterprises@gmail.com";

class Options extends Component {
  handleEmail = () => {
    // inform user of error
    email(EMAIL, { subject: "RE: Tone Tracker" }).catch(e =>
      // console.error("An error occured", err)
      Alert.alert("Error", String(e))
    )
  };
  render() {
    return (
      <Menu>
         <MenuTrigger>
           <Icon name="options-vertical" color="#fff" size={20} />
         </MenuTrigger>
         <MenuOptions>
           <MenuOption onSelect={() => this.handleEmail()} text="Contact" />
           <MenuOption
             onSelect={() => this.props.navigation.navigate(`PrivacyPolicy`)}
             text="Privacy Policy"
           />
         </MenuOptions>
      </Menu>
    );
  }
}

export default Options;