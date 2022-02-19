// import React from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   TextInput,
//   View,
//   Text,
//   Alert,
// } from "react-native";
// import { Button } from "./auxiliar/Button.js";
// import { connect } from "react-redux";
// import { setRegion } from "./reducers/coord_red.js";
// import axios from "axios";

// class Set_adress extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       adress: "avenida lucio costa 4500",
//     };
//   }

//   Geolocation = async ({ adress }) => {
//     const { region, setRegion, navigation } = this.props;
//     let key = "QzE3pKeUynnbsShybX02VKRCvfqoFcKG";
//     let loc = adress.replace(/ /gi, "-") + ",RJ,BR";
//     console.log(loc);
//     let tot =
//       "https://open.mapquestapi.com/geocoding/v1/address?key=" +
//       key +
//       "&location=" +
//       loc;
//     await axios.get(tot).then((r) => {
//       let resp = r.data.results[0].locations[0].latLng;
//       const { lat, lng } = resp;
//       console.log(lat, lng);
//       const LAT = parseFloat(lat);
//       const LONG = parseFloat(lng);
//       setRegion({
//         latitude: LAT,
//         longitude: LONG,
//         latitudeDelta: 0.009,
//         longitudeDelta: 0.009,
//       });
//       navigation.navigate("Map");
//     });
//   };

//   render() {
//     const { adress } = this.state;
//     return (
//       <SafeAreaView>
//         <View>
//           <TextInput
//             style={styles.input}
//             onChangeText={(adress) => this.setState({ adress })}
//             value={adress}
//             placeholder="endereço"
//           />
//         </View>
//         <View>
//           <Button
//             text="Press me"
//             onPress={() => (adress ? this.Geolocation({ adress }) : Alert.alert("espaço vazio"))}
//             isAsync
//           />
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

// const mapStateToProps = (state) => {
//   return {
//     region: state.region,
//   };
// };

// const mapDispatchToProps = {
//   setRegion,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Set_adress);
