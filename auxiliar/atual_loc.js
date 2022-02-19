import { Alert } from "react-native";
import * as Location from "expo-location";

export const atual_loc = async () => {
  // let isLocationServicesEnabled = await Location.hasServicesEnabledAsync();

  await Location.requestForegroundPermissionsAsync();
  await Location.requestBackgroundPermissionsAsync();
  let location1 = await Location.getCurrentPositionAsync({}).catch((e) => {});
  let location2 = await Location.getLastKnownPositionAsync({
    accuracy: 6,
  }).catch((e) => {});
  let location = location1 || location2;
  if (!location)
    Alert.alert(
      "Erro",
      "Confira se o GPS está ligado ou tente reiniciar o aplicativo"
    );
  const { latitude, longitude } = location.coords;
  return { latitude, longitude };
};
