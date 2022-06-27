import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { change_button } from "../reducers/button_red";
import { Button } from "./Button";

const GoTo = ({ nav_path,navigation, ...args }) => {
  const inp = {navigation,...args}
  return <Button onPress={() => navigation.navigate(nav_path)} {...inp} />;
};

// const stylesDefault = StyleSheet.create({
//   button: {
//     width: 300,
//     borderColor: "#420601",
//     borderWidth: 1,
//     alignItems: "center",
//     borderRadius: 5,
//   },
//   button_txt: {
//     fontWeight: "bold",
//     color: "#420601",
//     fontSize: 30,
//   },
// });

const mapStateToProps = (state) => {
  return {
    pressed: state.button,
  };
};

const mapDispatchToProps = {
  change_button,
};
// Voltar = connect(mapStateToProps, mapDispatchToProps)(Voltar);
export { GoTo };
