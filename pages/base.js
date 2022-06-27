import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { setRegion } from "../reducers/coord_red.js";
import { atual_loc } from "../auxiliar/atual_loc.js";
import { Button } from "../auxiliar/Button.js";
import { GoTo } from "../auxiliar/GoTo.js";

const Base = ({ navigation }) => {
  const nav = (nav_path) => ({
    onPress() {
      navigation.navigate(nav_path);
    },
  });

  const Title = () => (
    <View style={styles.title_container}>
      <Text style={styles.title}>InclinaSol</Text>
    </View>
  );

  const MyButton = ({ nav_path, text }) => {
    // console.log(nav_path)
    return (
      <TouchableOpacity style={styles.button} {...nav(nav_path)}>
        <Text style={styles.txt_button}>{text}</Text>
      </TouchableOpacity>
    );
  };

  const Buttons = () => (
    <View style={styles.icons}>
      {/* <MyButton nav_path={"Instructions"} text={"Manual"} /> */}
      <GoTo {...{ navigation }} nav_path={"Instructions"} text="Manual"  style={styles}/>
      <GoTo {...{ navigation }} nav_path={"Init"} text="Início"  style={styles}/>
      {/* <Button text='Manual' {...nav('Instructions')} style={styles}/>
      <Button text='Início' {...nav('Init')} style={styles}/> */}
      {/* <MyButton nav_path={"Init"} text={"Início"} /> */}
    </View>
  );
  const MyImage = () => (
    <Image style={styles.img} source={require("../assets/placas.jpg")} />
  );
  const Icons = () => (
    <View style={styles.icons}>
      <Image style={styles.img} source={require("../assets/uerj.jpg")} />
      <Image style={styles.img} source={require("../assets/ppgcta.jpg")} />
      <TouchableOpacity {...nav('mais_info')}>
        <Image style={styles.img} source={require("../assets/mais_info.jpg")} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* <Title /> */}
      <Buttons />
      <MyImage />
      <Icons />
    </SafeAreaView>
  );
};

// const Baseold = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <Text style={styles.title}>InclinaSol</Text>
//       </View>
//       <Image style={styles.img} source={require("../assets/placas.jpg")} />
//       <Button onPress={() => navigation.navigate("Init")} text="Iniciar" />
//       <Button
//         onPress={() => navigation.navigate("Instructions")}
//         text="Instruções"
//       />
//     </SafeAreaView>
//   );
// };

const styles = StyleSheet.create({
  container: {
    // padding: 50,
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor:'green'
  },
  title_container: {
    // flex: 1,
    // justifyContent: "space-evenly",
    // height: 100,
    marginTop: 40,
    justifyContent: "center",
    // backgroundColor:'red'
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    color: "#ff0d19",
  },
  icons: {
    width: "100%",
    // height: '80%',
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor:'yellow'
  },
  button: {
    width: "35%",
    borderRadius: 8,
    backgroundColor: "#3003fc",
  },
  txt_button: {
    fontSize: 30,
    textAlign: "center",
    color: "#fcfcfc",
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
