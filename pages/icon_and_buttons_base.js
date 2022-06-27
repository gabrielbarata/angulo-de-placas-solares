import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { setRegion } from "../reducers/coord_red.js";
import { atual_loc } from "../auxiliar/atual_loc.js";
import { Button } from "../auxiliar/Button.js";
import { GoTo } from "../auxiliar/GoTo.js";

class Icon_and_buttons_base extends React.Component {
  render() {
    const { children, text } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.ico_but}>
          <View style={styles.buttons}>{children}</View>
          <Image
            style={styles.img}
            source={require("../assets/ico_placa.jpg")}
          />
        </View>
        {/* <Button
            text="função demorada"
            onPress={async () => {
              function timeout(ms) {
                return new Promise((resolve) => setTimeout(resolve, ms));
              }
              await timeout(5000);
              Alert.alert("TESTE", "função para testar o loading");
            }}
            onLongPress={(e) => console.log("coe menor kkk")}
            isAsync
          /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "#000",
  },
  text: {
    color: "#3003fc",
  },
  buttons: {
    height: "80%",
    justifyContent: "space-evenly",
    // backgroundColor:'green'
  },
  ico_but: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  img: {
    width: "40%",
    resizeMode: "contain",
    // backgroundColor:'green'
  },
  // button:{
  //   backgroundColor:'red',
  //   padding: 1
  // }
});

const mapStateToProps = (state) => {
  return {
    region: state.region,
  };
};

const mapDispatchToProps = {
  setRegion,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Icon_and_buttons_base);
