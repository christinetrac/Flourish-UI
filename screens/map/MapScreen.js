import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import MapView from "react-native-maps";
import * as Location from 'expo-location';
import {BackButton, PrimaryButtonXS} from "../../components/Buttons";
import {LIST_STACK} from "../../utils/constants";

export const MapScreen = ({ navigation }) => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [address, setAddress] = useState(null);
    const [showNext, setShowNext] = useState(false);
    const [initialRegion, setInitialRegion] = useState({
        latitude: 43.4643,
        longitude: -80.5204,
        latitudeDelta: 50,
        longitudeDelta: 50,
    })

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

    useEffect(() => {
        if(location){
            _attemptReverseGeocodeAsync();
        }
    }, [location]);

    const _attemptReverseGeocodeAsync = async () => {
        try {
            const result = await Location.reverseGeocodeAsync(
                location?.coords
            );
            setAddress(result[0].name + ", " + result[0].city + ", " + result[0].region);
        } catch (e) {
            console.log(e)
        } finally {
            setInitialRegion({
                latitude: 43.4643,
                longitude: -80.5204,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
            })
            setShowNext(true);
        }
    };

    return (
    <View style={styles.container}>
      <BackButton onPress={() => navigation.pop()} />
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        region={initialRegion}
        showsUserLocation={true}
        followUserLocation={true}
      >
      </MapView>
        {showNext && (
            <View style={{position: "absolute", alignSelf: "center", bottom: 50}}>
                <PrimaryButtonXS label="next" onPress={() => navigation.navigate(LIST_STACK.storeLocationConfirmation, {
                    latitude: location?.coords?.latitude,
                    longitude: location?.coords?.longitude,
                    address: address
                })} />
            </View>
        )}
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
