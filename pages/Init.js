import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { setRegion } from "../reducers/coord_red.js";
import { atual_loc } from "../auxiliar/atual_loc.js";
import { Button } from "../auxiliar/Button.js";
import { GoTo } from "../auxiliar/GoTo.js";
import Icon_and_buttons_base from "./icon_and_buttons_base.js";

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

    // const Buttons = () => (
      
    // );
    return (
      <Icon_and_buttons_base text='Escolha a opção que será utilizada para o cálculo'>
        
        <GoTo {...{ navigation }} nav_path={"Set_coord"} text="Coordenadas" style={styles}/>
        <GoTo {...{ navigation }} nav_path={"Set_adress"} text="Endereço" style={styles}/>
        <Button onPress={this.current} text="Posição Atual" isAsync style={styles}/>

        <GoTo {...{ navigation }} nav_path={"Base"} text="Voltar ao início" style={styles}/>
      </Icon_and_buttons_base>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    height: 50,
    justifyContent:"center"
  },
  button_txt:{
    fontSize:20,
    // color: 'red'
  },
  // container: {
  //   flex: 1,
  //   justifyContent: "space-evenly",
  //   alignItems: "center",
  //   borderColor: "#000",
  // },
  // text:{
  //   color: '#3003fc'
  // },
  buttons:{
    height: '80%',
    justifyContent:"space-evenly",
    // backgroundColor:'green'
  },
  // ico_but:{
  //   width: '100%',
  //   flexDirection:'row',
  //   alignItems:"center",
  //   justifyContent:"space-evenly"
  // },
  // img:{
  //   width: '40%',
  //   resizeMode: "contain",
  //   // backgroundColor:'green'
  // },
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

export default connect(mapStateToProps, mapDispatchToProps)(Init);
