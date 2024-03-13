import {StyleSheet, SafeAreaView, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {BoldText} from "../../components/CustomText";
import React, {useEffect, useState} from "react";
import * as SecureStore from "expo-secure-store";
import {SEARCH_STACK} from "../../utils/constants";

export const HomeScreen = ({ navigation }) => {
    const [user, setUser] = useState(null);
    const [fruitsAndVegetables, setFruitsAndVegetables] = useState({
        name: 'fruits and vegetables',
        items: []
    });

    const [meat, setMeat] = useState({
        name: 'meat',
        items: []
    });

    const [dairy, setDairy] = useState({
        name: 'dairy',
        items: []
    });

    const [bread, setBread] = useState({
        name: 'bread',
        items: []
    });

    const categories = ['fruits and vegetables', 'meat', 'dairy', 'bread'];
    const getUser = async () => {
        SecureStore.getItemAsync('zz').then(async id => {
            await fetch(`http://54.226.95.182:3000/users/${id}`)
                .then(res => {
                    res.json().then(data => {
                        setUser(data);
                    }).catch(e => {
                        console.log(e)
                    })
                })
                .catch(e => {
                    console.log(e)
                })
        })
    }

    const getCategories = async () => {
        for await (const category of categories) {
            fetch(`http://54.226.95.182:3000/search/category/${category}`, {
                Accept: "application/json",
                "Content-type": "application/json"
            })
                .then(res => {
                    res.json().then(results => {
                        if(category === 'fruits and vegetables'){
                            setFruitsAndVegetables({
                                name: 'fruits and vegetables',
                                items: results
                            })
                        }else if(category === 'meat'){
                            setMeat({
                                name: 'meat',
                                items: results
                            })
                        }else if(category === 'dairy'){
                            setDairy({
                                name: 'dairy',
                                items: results
                            })
                        }else if(category === 'bread'){
                            setBread({
                                name: 'bread',
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
        getUser();
        getCategories();
    }, [])

    const rows = [dairy, bread, meat, fruitsAndVegetables]?.map(category => (
        <View style={{height: 210, width:400, paddingLeft:0, paddingRight:0, alignSelf:'center', paddingTop:10}} key={category.name}>
            <View style={{flexDirection:'row'}}>
                <BoldText style={{fontSize: 32, alignSelf: 'flex-start', paddingLeft: 16, paddingBottom: 8, textTransform: 'capitalize'}}>{category.name}</BoldText>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{backgroundColor: '#F6FFF1'}}>
                {category?.items?.map(item => (
                    <TouchableOpacity style={{zIndex:10}} key={item?.ProductName} onPress={() => navigation.navigate(SEARCH_STACK.product, {item: item, query: ""})}>
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

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#F6FFF1'}}>
                <BoldText style={{ fontSize: 40, width: 340, paddingLeft: 40, paddingTop:40 }} >
                    Welcome back, {user?.Name}
                </BoldText>
                <View style={styles.box}>
                    {rows}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6FFF1',
    },
    card: {
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
        padding: 10
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
        paddingTop: 20
    },
    shadowProp: {
        shadowOffset: {width: 12, height: 12},
        shadowColor: '#DCDCDC',
        shadowOpacity: 1,
        shadowRadius: 0,
    },
});
