import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import test_data from "../../mock_data/mock_product_data";

export const SearchScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState(test_data);
  const [masterDataSource, setMasterDataSource] = useState(test_data);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.ProductName
          ? item.ProductName.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Ionicons
          name="search"
          size={25}
          color="grey"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
        />
      </View>
      <ScrollView
        style={styles.scrollPage}
        showsVerticalScrollIndicator={false}
      >
        {filteredDataSource.map((item) => (
          <TouchableOpacity key={item.ProductName}>
            <View style={{ margin: 10 }}>
              <Text style={{ fontSize: 20 }}>{item.ProductName}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    borderWidth: 2,
    height: 40,
    width: 300,
    alignSelf: "center",
    borderRadius: 25,
    borderColor: "grey",
    backgroundColor: "white",
  },
  inputIcon: {
    position: "absolute",
    top: 5,
    left: 10,
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    padding: 10,
    top: 2,
    left: 32,
  },
  scrollPage: {
    flexGrow: 1,
    marginBottom: 15,
    width: 300,
    alignSelf: "center",
    backgroundColor: "white",
    top: 10,
    borderRadius: 25,
  },
});
