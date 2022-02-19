import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { setRegion } from "../reducers/coord_red.js";
import { atual_loc } from "../auxiliar/atual_loc.js";
import { Button } from "../auxiliar/Button.js";

const Base = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
      <Text style={styles.title}>Ângulo de</Text>
      <Text style={styles.title}>Placas Solares</Text>
      </View>
      <Image style={styles.img} source={require("../assets/placas.jpg")} />
      <Button onPress={() => navigation.navigate("Init")} text="iniciar" />
      <Button
        onPress={() => navigation.navigate("Instructions")}
        text="Instruções"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title:{
    fontSize:50,
    textAlign:"center",
    color: '#E6BDAC'
  },
  img: {
    height: 300,
    resizeMode: "contain",
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

export default connect(mapStateToProps, mapDispatchToProps)(Base);
