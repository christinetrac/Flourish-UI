import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

export const MapScreen = ({ navigation }) => {
  const [destination, setDestination] = useState({
    latitude: 43.47240157582932,
    longitude: -80.51577167162722,
  });

  const [origin, setOrigin] = useState({
    latitude: 43.47661328187301,
    longitude: -80.53906325877767,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 43.4643,
          longitude: -80.5204,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey="GOOGLE_MAPS_API_KEY"
          strokeWidth={4}
          strokeColor="red"
        />
        <Marker coordinate={origin} title="Starting Point" />
        <Marker coordinate={destination} title="Destination Point" />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
