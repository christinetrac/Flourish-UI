import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import {PrimaryButton, PrimaryButtonXS, SecondaryButton} from "../../components/Buttons";
import {LIST_STACK} from "../../utils/constants";
import {ScrollBlur} from "../../components/ScrollBlur";
import {BoldText, RegularText} from "../../components/CustomText";

export const MapScreen = ({ navigation }) => {
  const [destination, setDestination] = useState({
    latitude: 43.47240157582932,
    longitude: -80.51577167162722,
  });

  const [origin, setOrigin] = useState({
    latitude: 43.47661328187301,
    longitude: -80.53906325877767,
  });

    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (error) {
        text = error;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
    <View style={styles.container}>
      {/*<Text style={styles.test}>{text}</Text>*/}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 43.4643,
          longitude: -80.5204,
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
      >
        <Marker draggable
                coordinate={destination}
                onDragEnd={e => {setDestination(e.nativeEvent.coordinate)}}
                title="Your Location"
        />
      </MapView>
        <View style={{position: "absolute", alignSelf: "center", bottom: 50}}>
            <PrimaryButtonXS label="next" onPress={() => navigation.navigate(LIST_STACK.storeLocationConfirmation)} />
        </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  test: {
      position: "absolute",
      fontSize: 20,
      zIndex: 9999
  },
  map: {
    flex: 1,
  },
});
