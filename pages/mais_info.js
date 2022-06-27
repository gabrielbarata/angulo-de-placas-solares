import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { setRegion } from "../reducers/coord_red.js";
import { atual_loc } from "../auxiliar/atual_loc.js";
import { Button } from "../auxiliar/Button.js";
import fs from "expo-file-system";
import { Asset } from "expo-asset";
import textfile from "../assets/mais_info";
import { GoTo } from "../auxiliar/GoTo.js";
const Instructions = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.scroll}> */}
      {/* <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollinside}> */}
      <Text style={styles.txt}>{textfile}</Text>
      {/* </ScrollView> */}
      {/* </View> */}
      <View style={styles.icons}>
        <Image style={styles.img} source={require("../assets/uerj.jpg")} />
        <Image style={styles.img} source={require("../assets/ppgcta.jpg")} />
      </View>
      <View style={styles.icons}>
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
    // backgroundColor: "green",
    // paddingLeft: 'auto',
    // paddingRight: 'auto',
  },
  scroll: {
    // height: '50%',
    // flex: 1,
    // backgroundColor:'red',
  },
  scrollinside: {
    height: 10,
    alignItems: "center",
    // backgroundColor:'yellow',
  },
  icons:{
    width: '100%',
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:'center',
    marginTop:30,
    marginBottom:30
  },
  txt: {
    width: "90%",
    alignSelf:'center',
    // height: "70%",
    // backgroundColor:'green',
    fontSize: 20,
    textAlign: "justify",
    color: "#3003fc",
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
