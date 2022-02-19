import React, { useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  Dimensions,
  Clipboard,
} from "react-native";
// import Clipboard from '@react-native-community/clipboard';
import { connect } from "react-redux";
import { setRegion } from "../reducers/coord_red.js";
import { Button } from "../auxiliar/Button.js";

// console.log(PROVIDER_GOOGLE)
class Mapa extends React.Component {
  render() {
    const { region, setRegion } = this.props;
    const { latitude, longitude } = region;
    return (
      <SafeAreaView>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          showsUserLocation
          // followsUserLocation
          region={region}
          onRegionChangeComplete={(region) => setRegion(region)}
        >
          <Marker
            coordinate={{ latitude, longitude }}
            pinColor={"blue"}
            title={"title"}
            description={"description"}
          />
        </MapView>
        <Button
          style={styles}
          onPress={() => {
            const a = latitude + latitude / 3;
            const b = longitude - longitude / 3;
            const m = Math.abs(a + b) / 2;
            console.log({ latitude, longitude, m });
            Alert.alert(
              "Ângulo",
              `Ângulo: ${m}\n\nLatitude: ${latitude},\nLongitude: ${longitude}`,
              [
                {
                  text: "Copiar Ângulo",
                  onPress: () => Clipboard.setString(`${m}`),
                },
                { text: "fechar" },
              ],
              {
                cancelable: true,
              }
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    // marginTop: 30,
  },
  button: {
    width: "auto",
    height: 50,
    left: 10,
    right: 10,
    bottom: 100,
    position: "absolute",
  },
  button_txt: {
    color: "#E5845B",
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

export default connect(mapStateToProps, mapDispatchToProps)(Mapa);
