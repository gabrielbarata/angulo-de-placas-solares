import React from "react";
import { SafeAreaView, StyleSheet, View, Text, Alert } from "react-native";
import { Input } from "../auxiliar/Input.js";
import { connect } from "react-redux";
import { setRegion } from "../reducers/coord_red.js";
import { Button } from "../auxiliar/Button.js";
import { InputGraus } from "../auxiliar/input_graus.js";
import Icon_and_buttons_base from "./icon_and_buttons_base.js";
import { GoTo } from "../auxiliar/GoTo.js";

class Set_coord extends React.Component {
  render() {
    const { region, setRegion, navigation } = this.props;
    return (

      <Icon_and_buttons_base text='Digite as coordenadas e confirme'>
        {/* <View style={styles.buttons}> */}
           <InputGraus
          myplaceholder="Latitude"
          state="latitude"
          graus
          THIS={this}
          keyboardType="numeric"
         />
        <InputGraus
          myplaceholder="Longitude"
          state="longitude"
          graus
          THIS={this}
          keyboardType="numeric"
         />
         <Button
          style={styles}
          text="Confirmar Valores"
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
         <GoTo {...{ navigation }} nav_path={"Init"} text="Voltar"  style={styles}/>
      </Icon_and_buttons_base>


      // <SafeAreaView style={styles.container}>
      //   <InputGraus
      //     myplaceholder="Latitude"
      //     state="latitude"
      //     graus
      //     THIS={this}
      //     keyboardType="numeric"
      //   />
      //   <InputGraus
      //     myplaceholder="Longitude"
      //     state="longitude"
      //     graus
      //     THIS={this}
      //     keyboardType="numeric"
      //   />
      //   <Button
      //     style={styles}
      //     onPress={() => {
      //       const { latitude, longitude } = this.state;
      //       if (latitude && longitude) {
      //         const LAT = parseFloat(latitude);
      //         const LONG = parseFloat(longitude);
      //         setRegion({
      //           latitude: LAT,
      //           longitude: LONG,
      //           latitudeDelta: 0.009,
      //           longitudeDelta: 0.009,
      //         });
      //         navigation.navigate("Map");
      //       } else {
      //         Alert.alert("espaço vazio");
      //       }
      //     }}
      //   />
      // </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button:{
    height: 50,
    justifyContent:"center"
  },
  button_txt:{
    fontSize:20,
    // color: 'red'
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

export default connect(mapStateToProps, mapDispatchToProps)(Set_coord);
