import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { setRegion } from "../reducers/coord_red.js";
import { atual_loc } from "../auxiliar/atual_loc.js";
import { Button } from "../auxiliar/Button.js";

class Init extends React.Component {
  current = async () => {
    const { setRegion, navigation } = this.props;
    const coord = await atual_loc();
    setRegion({
      ...coord,
      latitudeDelta: 0.009,
      longitudeDelta: 0.009,
    });
    navigation.navigate("Map");
  };

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Button
          onPress={() => navigation.navigate("Set_coord")}
          text="Coordenadas"
        />
        <Button
          onPress={() => navigation.navigate("Set_adress")}
          text="Endereço"
        />
        <Button onPress={this.current} text="Posição Atual" isAsync />

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
    borderColor: '#000',
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

export default connect(mapStateToProps, mapDispatchToProps)(Init);
