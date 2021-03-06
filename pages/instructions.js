import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { setRegion } from "../reducers/coord_red.js";
import { atual_loc } from "../auxiliar/atual_loc.js";
import { Button } from "../auxiliar/Button.js";
import fs from "expo-file-system";
import { Asset } from "expo-asset";
import textfile from "../assets/instructions.js";
import { GoTo } from "../auxiliar/GoTo.js";
const Instructions = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollinside}>
        <Text style={styles.txt}>{textfile}</Text>
      </ScrollView>
      <View style={styles.center}>
      <GoTo
        {...{ navigation }}
        nav_path={"Base"}
        text="Voltar"
        style={styles}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollinside: {
    alignItems: "center",
  },
  txt: {
    width: "90%",
    height: "100%",
    fontSize: 20,
    textAlign: "justify",
    color: "#3003fc",
  },
  center:{
    width: '100%',
    // flex:1,
    alignItems:'center',
    // backgroundColor:'red'
  },
  button:{
    width: '50%'
  }
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
