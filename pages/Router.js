import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Init from "./Init.js";
import Mapa from "./Mapa.js";
import Set_coord from "./Set_coord.js";
import Set_adress from "./Set_adress.js";
import { LinearGradient } from "expo-linear-gradient";
import base from "./base.js";
import instructions from "./instructions.js";
import mais_info from "./mais_info";
import { SafeAreaView } from "react-native";

const { Navigator, Screen } = createStackNavigator();

const Wrap = (Insides) => (props) =>
  (
    // (
    //   <SafeAreaView
    //     style={{ flex: 1 }}
    //     colors={["#942911", "#6883BA"]}
    //     start={{ x: 0, y: 0 }}
    //     end={{ x: 0, y: 1 }}
    //   >

    //     <Insides {...props} />
    //   </SafeAreaView>
    // );
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#fcfcfc", "#fcfcfc"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Insides {...props} />
    </LinearGradient>
  );

export default Router = () => {
  // const opt = (headerTitle, backColor) => ({
  //   options: {
  //     headerTitle,
  //     headerStyle: {
  //       // backgroundColor: "#AE5C74",
  //       // backgroundColor: "#6883BA",
  //       backgroundColor: backColor ? backColor : "#942911",
  //       borderBottomColor: backColor ? backColor : "#942911",
  //       borderBottomWidth: 2,
  //     },
  //     headerTintColor: "#000",
  //     headerTitleStyle: {
  //       color: "#000",
  //       fontWeight: "bold",
  //     },
  //   },
  // });

  const opt ={
    options: {
      headerTitle: 'InclinaSol',
      headerTitleAlign: 'center',
      // headerTransparent:true,
      headerLeft: null,

      headerStyle: {
        height:100,
        
        backgroundColor: "#fcfcfc",
        // backgroundColor: "#6883BA",
        
        // backgroundColor: backColor ? backColor : "#942911",
        // borderBottomColor: backColor ? backColor : "#942911",
        // borderBottomWidth: 2,
      },
      // headerTitleContainerStyle: { marginTop: 0 , },
      headerTitleStyle: {
        color: "#ff0d19",
        // flex:1,

        // fontWeight: "bold",
        fontSize:50
        // align
      },
    },
  }
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Base"
          component={Wrap(base)}
          {...opt}
          // options={{ }}
        />
        <Screen name="Init" component={Wrap(Init)} 
        {...opt}
         />
        <Screen
          name="Instructions"
          component={Wrap(instructions)}
          {...opt}
          // {...opt("Instruções")}
        />
        <Screen
          name="mais_info"
          component={Wrap(mais_info)}
          {...opt}
          // {...opt("mais_info")}
        />
        <Screen
          name="Set_coord"
          component={Wrap(Set_coord)}
          {...opt}
          // {...opt("Coordenadas")}
        />
        <Screen
          name="Set_adress"
          component={Wrap(Set_adress)}
          {...opt}
          // {...opt("Endereço")}
        />
        <Screen name="Map" component={Mapa} 
        {...opt}
        // {...opt("Mapa", "#6883BA")}
         />
      </Navigator>
    </NavigationContainer>
    // <>{Wrap(Init)()}</>
  );
};

//   const Drawer = createDrawerNavigator();
// export default Router = () => (
//   <NavigationContainer>
//     <Drawer.Navigator initialRouteName="Init">
//       <Drawer.Screen name="Init" component={Init} />
//       <Drawer.Screen name="Set_coord" component={Set_coord} />
//       <Drawer.Screen name="Map" component={Mapa} />
//     </Drawer.Navigator>
//   </NavigationContainer>
// );
