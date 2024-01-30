import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { test_data } from "../../mock_data/mock_product_data";
import { Carousel } from "../../components/Carousel";
import { SEARCH_CATEGORIES } from "../../utils/mockData";
import {RegularText} from "../../components/CustomText";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {SEARCH_STACK} from "../../utils/constants";

export const SearchScreen = ({ navigation }) => {
  const [searchCategories, setSearchCategories] = useState(SEARCH_CATEGORIES);

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}
                                accessible={false}>
    <View keyboardDismissMode="interactive" style={{ flex: 1, backgroundColor: '#F6FFF1' }}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={25}
          color="#9D9D9D"
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
        />
      </View>
      {search === "" ? (
          <View keyboardDismissMode="interactive" style={{ paddingLeft: 40, paddingTop: 40 }}>
            {searchCategories.map(category => (
                <Carousel title={category.name} items={category.items} key={category.name} />
            ))}
        </View>
      ) : (
          <View keyboardDismissMode="interactive">
            <ScrollView
                style={styles.scrollPage}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollPageContainer}
                contentInset={{bottom: 10, top: 0}}
            >
              {filteredDataSource.map((item) => (
                  <TouchableOpacity key={item.ProductName} style={{ marginBottom: 10 }} onPress={() => navigation.navigate(SEARCH_STACK.product, {item: item})}>
                    <View style={{ marginTop: 10 }}>
                      <RegularText style={{ fontSize: 20, textTransform: "lowercase" }}>{item.ProductName}</RegularText>
                    </View>
                  </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
      )}
    </View>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 70,
    width: 326,
    alignSelf: "center",
  },
  inputIcon: {
    position: "absolute",
    top: 13,
    left: 18,
    zIndex: 999
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    paddingLeft: 50,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontFamily: 'Inter_400Regular',
    backgroundColor: '#FFF',
    borderRadius: 31,
    borderWidth: 3,
    borderColor: '#9D9D9D',
    height: 52,
    display: "flex"
  },
  scrollPage: {
    width: 316,
    alignSelf: "center",
    backgroundColor: "white",
    top: 14,
    borderRadius: 7,
    flexGrow: 0,
    minHeight: 50,
    maxHeight: '100%'
  },
  scrollPageContainer: {
    paddingHorizontal: 24,
    flexGrow: 0,
  }
});
