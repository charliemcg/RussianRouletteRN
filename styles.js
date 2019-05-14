import { Dimensions } from "react-native";

export default {
  parent: {
    height: "100%",
    backgroundColor: "#000"
  },
  backgroundImg: {
    height: Dimensions.get("window").width * 1.6327,
    width: Dimensions.get("window").width,
    position: "absolute"
  },
  // buffer: {
  //   height: "54%"
  // },
  pickerRowWrapper: {
    position: 'absolute',
    bottom: "28%",
    height: "12%",
    flexDirection: "row"
  },
  bulletsPickerWrapper: {
    width: "50%",
    paddingStart: 20
  },
  chambersPickerWrapper: {
    width: "50%",
    alignItems: "flex-end",
    paddingEnd: 20
  },
  pickerWrapper: {
    height: "50%",
    width: "50%",
    backgroundColor: "#ccc",
    justifyContent: "center",
    borderRadius: 5
  },
  pickerWrapperDisabled: {
    height: "50%",
    width: "50%",
    backgroundColor: "#444",
    justifyContent: "center",
    borderRadius: 5
  },
  gameStatusWrapper: {
    position: 'absolute',
    bottom: "20%",
    height: "8%",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  buttonWrapper: {
    position: 'absolute',
    height: "20%",
    width: "100%",
    bottom: 0,
    // borderStyle: "solid",
    // borderColor: "#111",
    // borderWidth: 1,
    borderRadius: 10,
    padding: 20
  },
  button: {
    height: "80%",
    width: '100%',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20
  },
  text: {
    color: "white"
  }
};
