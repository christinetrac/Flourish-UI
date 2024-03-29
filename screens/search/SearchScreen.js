import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Keyboard,
  Image,
  TouchableWithoutFeedback, ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {RegularText, BoldText, RegularClippedText} from "../../components/CustomText";
import { SEARCH_STACK } from "../../utils/constants";
import {PrimaryButton} from "../../components/Buttons";

export const SearchScreen = ({ navigation }) => {
  const [seafood, setSeafood] = useState({
    name: 'seafood',
    items: []
  });

  const [eggs, setEggs] = useState({
    name: 'eggs',
    items: []
  });

  const [cannedGoods, setCannedGoods] = useState({
    name: 'canned goods',
    items: []
  });

  const categories = ['seafood', 'eggs', 'canned goods'];
  const [isLoading, setIsLoading] = useState(false);
  const getCategories = async () => {
    for await (const category of categories) {
      fetch(`http://54.226.95.182:3000/search/category/${category}`, {
        Accept: "application/json",
        "Content-type": "application/json"
      })
          .then(res => {
            res.json().then(results => {
              if(category === 'seafood'){
                setSeafood({
                  name: 'seafood',
                  items: results
                })
              }else if(category === 'eggs'){
                setEggs({
                  name: 'eggs',
                  items: results
                })
              }else if(category === 'canned goods'){
                setCannedGoods({
                  name: 'canned goods',
                  items: results
                })
              }
            }).catch(e => console.log(e))
          }).catch(e => {
        console.log(e)
      })
    }
  }
  useEffect(() => {
    getCategories();
  }, [])

  const [search, setSearch] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  const getQueryResults = async () => {
    setIsLoading(true);
    const transformedString = search?.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
    await fetch(`http://54.226.95.182:3000/search/${transformedString}`, {
      Accept: "application/json",
      "Content-type": "application/json"
    }).then(res => {
      res.json().then(results => {
        // console.log(results);
        setFilteredDataSource(results);
        // console.log(results);
      }).catch(e => console.log(e))
    }).catch(e => console.log(e))
        .finally(() => {
          setIsLoading(false);
        })
  }

  const rows = [seafood, eggs, cannedGoods]?.map(category => (
      <View style={{height: 210, width:400, paddingLeft:0, paddingRight:0, alignSelf:'center', paddingTop:20}} key={category.name}>
        <View style={{flexDirection:'row'}}>
          <BoldText style={{fontSize: 32, alignSelf: 'flex-start', paddingLeft: 16, paddingBottom: 8, textTransform: 'capitalize'}}>{category.name}</BoldText>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#F6FFF1'}}>
          {category?.items?.map(item => (
              <TouchableOpacity style={{zIndex:10}} key={item?.ProductName} onPress={() => navigation.navigate(SEARCH_STACK.product, {item: item, query: search})}>
                <View style={{marginRight:10, marginLeft:15}}>
                  <View style={[styles.card, styles.shadowProp]}>
                    <Image source={{uri:item?.ProductPhotoUrl}} style={styles.image}/>
                  </View>
                </View>
              </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
  ));

  const handleSubmitEditing = () => {
    setSubmitted(true);
    getQueryResults();
  }

  const searchAutocompleteList = () => (
      <View keyboardDismissMode="interactive" style={styles.scrollPage}>
          {filteredDataSource.map((item) => (
              <TouchableOpacity
                  key={item.ProductName}
                  style={{ marginBottom: 10, paddingHorizontal: 20 }}
                  onPress={() =>
                      navigation.navigate(SEARCH_STACK.product, { item: item, query: search })
                  }
              >
                <View style={{ marginTop: 10 }}>
                  <RegularText
                      style={{ fontSize: 20, textTransform: "lowercase" }}
                  >
                    {item.ProductName}
                  </RegularText>
                </View>
              </TouchableOpacity>
          ))}
      </View>
  )

  const searchResults = () => (
      <View style={{paddingTop:25}}>
        {isLoading ? (
            <View style={{position: "absolute", alignSelf: "center", top: 340}}>
              <ActivityIndicator size="large" color="#000" />
            </View>
        ) : (
            <ScrollView style={{backgroundColor: '#F6FFF1'}}>
              <PrimaryButton
                  label="give me the best price"
                  onPress={() => navigation.navigate(SEARCH_STACK.bestProductScreen, { query: search })}
              />
              <BoldText style={{fontSize: 32, paddingLeft: 40, paddingVertical: 20}}>Specific Products</BoldText>
              {filteredDataSource?.map((item) => (
                  <TouchableOpacity
                      key={item.ProductName}
                      style={[styles.productCard, styles.productCardShadowProp]}
                      onPress={() =>
                          navigation.navigate(SEARCH_STACK.product, { item: item, query: search})
                      }
                  >
                    <Image source={{uri:item?.ProductPhotoUrl}} style={styles.productImage} />
                    <RegularClippedText
                        numberOfLines={1}
                        style={{ fontSize: 18, textTransform: "capitalize", width: 170, alignSelf: "center" }}
                    >
                      {item.ProductName}
                    </RegularClippedText>
                  </TouchableOpacity>
              ))}
            </ScrollView>
        )}
      </View>
  )

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: "#F6FFF1"}}>
      <View
        keyboardDismissMode="interactive"
        style={{ flex: 1, backgroundColor: "#F6FFF1" }}
      >
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={25}
            color="#9D9D9D"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => setSearch(text)}
            value={search}
            underlineColorAndroid="transparent"
            onSubmitEditing={handleSubmitEditing}
          />
        </View>
        {search === "" ? (
            <View style={styles.box}>
              {rows}
            </View>
        ) : (
            submitted ? (
                searchResults()
            ) : (
                searchAutocompleteList()
            )
        )}
      </View>
      </ScrollView>
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
    zIndex: 999,
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    paddingLeft: 50,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontFamily: "Inter_400Regular",
    backgroundColor: "#FFF",
    borderRadius: 31,
    borderWidth: 3,
    borderColor: "#9D9D9D",
    height: 52,
    display: "flex",
  },
  scrollPage: {
    width: 316,
    alignSelf: "center",
    backgroundColor: "white",
    top: 14,
    borderRadius: 7,
    flexGrow: 0,
    marginBottom: 30
  },
  card: {
    padding: 10,
    width: 176,
    height: 129,
    backgroundColor: '#fff',
    borderRadius: 14,
    zIndex: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  image: {
    flex: 1,
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    justifyContent: "center",
    alignSelf: "center",
  },
  box: {
    width: 100 + '%',
    paddingLeft: 50,
    paddingTop: 20,
    paddingBottom: 50
  },
  shadowProp: {
    shadowOffset: {width: 12, height: 12},
    shadowColor: '#DCDCDC',
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  productCardShadowProp: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: '#DCDCDC',
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  productCard: {
    width: 315,
    backgroundColor: '#fff',
    borderRadius: 14,
    alignSelf: "center",
    height: 100,
    marginBottom: 26,
    paddingHorizontal: 10,
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",

  },
  productImage: {
    flex: 1,
    width: "100%",
    height: undefined,
    resizeMode: 'contain',
  }
});
