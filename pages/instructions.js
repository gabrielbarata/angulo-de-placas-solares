import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { setRegion } from "../reducers/coord_red.js";
import { atual_loc } from "../auxiliar/atual_loc.js";
import { Button } from "../auxiliar/Button.js";
import fs from 'expo-file-system'
import { Asset } from 'expo-asset';
import textfile from '../assets/instructions.js';
const Instructions = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.txt}>{textfile}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  txt: {
    width: '90%',
    height: '100%',
    fontSize:20,
    textAlign:"justify",
  },
});

const mapStateToProps = (state) => {
  return {
    region: state.region,
  };
};

const mapDispatchToProps = {
  setRegion,
};

export default connect(mapStateToProps, mapDispatchToProps)(Instructions);
