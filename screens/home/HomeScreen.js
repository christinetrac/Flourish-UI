import {StyleSheet, SafeAreaView, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {BoldText} from "../../components/CustomText";
import React, {useEffect, useState} from "react";
import {SEARCH_CATEGORIES} from "../../utils/mockData";
import * as SecureStore from "expo-secure-store";

export const HomeScreen = ({ navigation }) => {
    const [searchCategories, setSearchCategories] = useState(SEARCH_CATEGORIES);

    let [user, setUser] = useState(null);
    const getUser = async () => {
        SecureStore.getItemAsync('ding').then(async id => {
            console.log(id)
            await fetch(`http://192.168.1.243:3000/users/${id}`)
                .then(res => {
                    res.json().then( data => {
                        console.log(data);
                        setUser(data);
                    })
                })
                .catch(e => {
                    console.log(e)
                })
        })
    }
    useEffect(() => {
        getUser();
    }, [])

    const rows = searchCategories.map(category => (
        <View style={{height: 210, width:400, paddingLeft:0, paddingRight:0, alignSelf:'center', paddingTop:10}} key={category.name}>
            <View style={{flexDirection:'row'}}>
                <BoldText style={{fontSize: 32, alignSelf: 'flex-start', paddingLeft: 16, paddingBottom: 8, textTransform: 'capitalize'}}>{category.name}</BoldText>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {category.items.map(image => (
                    <TouchableOpacity style={{zIndex:10}} key={image} onPress={() => undefined}>
                        <View style={{marginRight:10, marginLeft:15}}>
                            <View style={[styles.card, styles.shadowProp]}>
                                <Image source={image} style={styles.image}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    ));

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
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
