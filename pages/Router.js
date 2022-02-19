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
import { SafeAreaView } from "react-native";

const { Navigator, Screen } = createStackNavigator();

const Wrap = (Insides) => (props) =>
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
  (
    <LinearGradient
      style={{ flex: 1 }}
      colors={["#942911", "#6883BA"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >

      <Insides {...props} />
    </LinearGradient>
  );

export default Router = () => {
  const opt = (headerTitle) => ({
    options: {
      headerTitle,
      headerStyle: {
        backgroundColor: "#AE5C74",
      },
    },
  });
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Base"
          component={Wrap(base)}
          options={{ headerShown: false }}
        />
        <Screen name="Init" component={Wrap(Init)} {...opt("Início")} />
        <Screen
          name="Instructions"
          component={Wrap(instructions)}
          {...opt("Instruções")}
        />
        <Screen
          name="Set_coord"
          component={Wrap(Set_coord)}
          {...opt("Coordenadas")}
        />
        <Screen
          name="Set_adress"
          component={Wrap(Set_adress)}
          {...opt("Endereço")}
        />
        <Screen name="Map" component={Mapa} {...opt("Mapa")} />
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
