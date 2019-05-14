import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Picker,
  Dimensions,
  Alert,
  Image,
  TouchableHighlight,
  Platform,
  StatusBar
} from "react-native";
import strings from "./strings";
import gunImg from "./gunbackgroundnew.png";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import Sound from "react-native-sound";
import ModalSelector from 'react-native-modal-selector'
// import { createAppContainer, createStackNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Options from './Options'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const vibrateOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: true
};

// const MyStatusBar = ({ backgroundColor, ...props }) => (
//   <View
//     style={{
//       height: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
//     }}
//   >
//     <StatusBar translucent backgroundColor="#000" {...props} />
//   </View>
// );

const click = new Sound('emptychamber.mp3', Sound.MAIN_BUNDLE);
const bang = new Sound('gunshot.mp3', Sound.MAIN_BUNDLE);

function loadChambers(bullets, chambers) {
  let loadedChambersArr = [];
  for (let i = 0; i < bullets; i++) {
    let randomChamber = Math.floor(Math.random() * chambers + 1);
    while (loadedChambersArr.includes(randomChamber)) {
      randomChamber = Math.floor(Math.random() * chambers + 1);
    }
    loadedChambersArr.push(randomChamber);
  }
  return loadedChambersArr;
}

export default class TheGoodStuff extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      //Heading/title of the header
      // title: navigation.getParam("Title", "Russian Roulette"),
      //Heading style
      headerTitleStyle: {
        color: "#fff"
      },
      headerStyle: {
        // backgroundColor: navigation.getParam("BackgroundColor", "red")
        backgroundColor: "#000"
      },
      // //Heading text color
      // headerTintColor: navigation.getParam("HeaderTintColor", "#000"),
      //Heading Menu in Right Side
      headerRight: <Options navigation={navigation} />
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      bullets: 1,
      bulletsInPlay: 1,
      chambers: 6,
      chambersInPlay: 6,
      buttonText: strings.play,
      playMode: false,
      loadedChambers: [],
      disableButton: false,
      buttonTextColor: "#fff"
    };
  }
  handleBulletChange = event => {
    this.setState({ bullets: event, bulletsInPlay: event });
    if(this.state.chambers !== this.state.chambersInPlay){
      this.setState({chambersInPlay: this.state.chambers})
    }
  };
  handleChamberChange = event => {
    this.setState({ chambers: event, chambersInPlay: event });
    if(this.state.bullets > Number(event)){
      this.setState({bullets: event, bulletsInPlay: event})
    }
    if(this.state.bullets !== this.state.bulletsInPlay){
      this.setState({bulletsInPlay: this.state.bullets})
    }
  };
  handlePlay = () => {
    if (!this.state.disableButton) {
      // let {
      //   bullets,
      //   bulletsInPlay,
      //   chambers,
      //   chambersInPlay,
      //   playMode,
      //   loadedChambers
      // } = this.state;
      
      if (!this.state.playMode) {
        if (this.state.bullets !== this.state.bulletsInPlay) {
          this.setState({ bulletsInPlay: this.state.bullets });
          this.setState({ chambersInPlay: this.state.chambers });
        }
        this.setState({
          buttonText: strings.pullTrigger,
          playMode: true,
          loadedChambers: loadChambers(this.state.bullets, this.state.chambers)
        });
      } else if (!this.state.loadedChambers.includes(Number(this.state.chambersInPlay))) {
        if (this.state.buttonText !== strings.pullTrigger) {
          this.setState({ buttonText: strings.pullTrigger });
        }
        this.setState({ chambersInPlay: --this.state.chambersInPlay });
        click.play();
        ReactNativeHapticFeedback.trigger("impactLight", vibrateOptions);
      } else {
        this.setState({
          bulletsInPlay: --this.state.bulletsInPlay,
          chambersInPlay: --this.state.chambersInPlay
        });
        bang.play();
        ReactNativeHapticFeedback.trigger("impactHeavy", vibrateOptions);
        if (this.state.bulletsInPlay === 0) {
          this.setState({
            playMode: false,
            buttonText: `${strings.youDied}\n${strings.playAgain}`
          });
        } else {
          this.setState({
            buttonText: `${strings.youDied}\n${strings.pullTrigger}`
          });
        }
      }
      this.setState({ disableButton: true, buttonTextColor: "#222" });
      setTimeout(() => {
        this.setState({ disableButton: false, buttonTextColor: "#fff" });
      }, 500);
    }
  };
  render() {
    pickerStyle = this.state.playMode
      ? styles.pickerWrapperDisabled
      : styles.pickerWrapper;
    const bulletsArr = [];
    for (let i = 1; i <= this.state.chambers; i++) {
      bulletsArr.push(i);
    }
    const bullets = bulletsArr.map((val, i) => {
      return {key: i, label: String(val)}
    });
    const chambersArr = [];
    for (let i = 1; i < 13; i++) {
      chambersArr.push(i);
    }
    const chambers = chambersArr.map((val, i) => {
      return {key: i, label: String(val)}
    });
    return (
      <View>
        <View style={styles.parent}>
          <Image source={gunImg} style={styles.backgroundImg} />
          {/* <View style={styles.buffer} /> */}
        {/* <TouchableHighlight 
          onPress={() => this.props.navigation.navigate("TestScreen")}
          style={styles.overflow}>
          <Icon name="options-vertical" color="#ddd" size={25}/>
        </TouchableHighlight> */}
          <View style={styles.pickerRowWrapper}>
            <View style={styles.bulletsPickerWrapper}>
              <Text style={styles.text}>{strings.bullets}</Text>
              <View style={pickerStyle}>
                <ModalSelector
                  data={bullets}
                  initValue={String(this.state.bullets)}
                  onChange={value => this.handleBulletChange(value.label)}
                  disabled={this.state.playMode}
                  optionTextStyle={{color: "#222"}}/>
              </View>
            </View>
            <View style={styles.chambersPickerWrapper}>
              <Text style={styles.text}>{strings.chambers}</Text>
              <View style={pickerStyle}>
                <ModalSelector
                  data={chambers}
                  initValue={String(this.state.chambers)}
                  onChange={value => this.handleChamberChange(value.label)}
                  disabled={this.state.playMode}
                  optionTextStyle={{color: "#222"}}/>
              </View>
            </View>
          </View>
          <View style={styles.gameStatusWrapper}>
            <Text style={styles.text}>
              {strings.bulletsRemaining}
              {this.state.bulletsInPlay}
            </Text>
            <Text style={styles.text}>
              {strings.chambersRemaining}
              {this.state.chambersInPlay}
            </Text>
          </View>
          <TouchableHighlight
            onPress={() => this.handlePlay()}
            style={styles.buttonWrapper}
          >
            <LinearGradient
              colors={["#999", "#333", "#111"]}
              style={styles.button}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: this.state.buttonTextColor,
                  fontSize: 20
                }}
              >
                {this.state.buttonText}
              </Text>
            </LinearGradient>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
