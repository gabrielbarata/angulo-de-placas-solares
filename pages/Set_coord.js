import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Alert } from "react-native";
import { Input } from "../auxiliar/Input.js";
import { connect } from "react-redux";
import { setRegion } from "../reducers/coord_red.js";
import { Button } from "../auxiliar/Button.js";

class Set_coord extends React.Component {
  render() {
    const { region, setRegion, navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <Input
          placeholder="Latitude"
          state="latitude"
          THIS={this}
          keyboardType="numeric"
        />
        <Input
          placeholder="Longitude"
          state="longitude"
          THIS={this}
          keyboardType="numeric"
        />
        <Button
          style={styles}
          onPress={() => {
            const { latitude, longitude } = this.state;
            if (latitude && longitude) {
              const LAT = parseFloat(latitude);
              const LONG = parseFloat(longitude);
              setRegion({
                latitude: LAT,
                longitude: LONG,
                latitudeDelta: 0.009,
                longitudeDelta: 0.009,
              });
              navigation.navigate("Map");
            } else {
              Alert.alert("espaço vazio");
            }
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
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

export default connect(mapStateToProps, mapDispatchToProps)(Set_coord);
