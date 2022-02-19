// import React from "react";
// import {
//   SafeAreaView,
//   StyleSheet,
//   Alert,
//   Text,
//   Dimensions,
// } from "react-native";
// import { connect } from "react-redux";
// import { setRegion } from "./reducers/coord_red.js";
// import { Button } from "./auxiliar/Button.js";
// import MapboxGL from '@react-native-mapbox-gl/maps';
// const AccessToken='pk.eyJ1IjoiZ2FicmllbGJhcmF0YSIsImEiOiJja3RrczRzcTUwdHl1MnBvMHN0ZWlzYWZuIn0.8_UdqbFx_v1e8GVhtIucXg'
// MapboxGL.setAccessToken(AccessToken)


// class Mapa extends React.Component {
//   render() {
//     const { region, setRegion } = this.props;
//     const { latitude, longitude } = region;
//     return (
//       <SafeAreaView>
//           <MapboxGL.MapView/>
//           {/* <Text>jzblcjbcajbckajsbckajjc amsc</Text> */}
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   map: {
//     width: Dimensions.get("window").width,
//     height: Dimensions.get("window").height,
//   },
//   button_container: {
//     height: 50,
//     left: 10,
//     right: 10,
//     bottom: 110,
//     position: "absolute",
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

// export default Mapa;
