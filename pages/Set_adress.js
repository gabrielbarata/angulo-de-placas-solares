import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Alert,
  Dimensions,
} from "react-native";
import { Input } from "../auxiliar/Input.js";
import { Button } from "../auxiliar/Button.js";
import { connect } from "react-redux";
import { setRegion } from "../reducers/coord_red.js";
import Geocoder from "react-native-geocoding";
import appjson from "../app.json";
// console.log(JSON.stringify(appjson, null, 5))
Geocoder.init(appjson.expo.android.config.googleMaps.apiKey);

class Set_adress extends React.Component {
  set_region = ({ geometry }) => {
    const { setRegion } = this.props;
    const { width, height } = Dimensions.get("window");
    const ASPECT_RATIO = width / height;
    const lat = geometry.location.lat;
    const lng = geometry.location.lng;
    const latDelta =
      geometry.viewport.northeast.lat - geometry.viewport.southwest.lat;
    const lngDelta = latDelta * ASPECT_RATIO;
    setRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: latDelta,
      longitudeDelta: lngDelta,
    });
  };

  Geolocation = async (adress) => {
    const { region, setRegion, navigation } = this.props;
    await Geocoder.from(adress)
      .then((json) => {
        this.set_region(json.results[0]);
        navigation.navigate("Map");
      })
      .catch((error) =>
        Alert.alert("Erro", "Certifique-se que é um local valido")
      );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Input
          placeholder="Endereço"
          state="adress"
          // init="avenida lucio costa 4200"
          THIS={this}
        />
        <Button
          onPress={async () => {
            const { adress } = this.state;
            adress
              ? await this.Geolocation(adress)
              : Alert.alert("espaço vazio");
          }}
          isAsync
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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

export default connect(mapStateToProps, mapDispatchToProps)(Set_adress);
