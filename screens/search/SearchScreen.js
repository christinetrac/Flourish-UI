import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Carousel } from "../../components/Carousel";
import { SEARCH_CATEGORIES } from "../../utils/mockData";

export const SearchScreen = ({ navigation }) => {
    const [searchCategories, setSearchCategories] = useState(SEARCH_CATEGORIES);
    return (
        <View style={styles.container}>
            {searchCategories.map(category => (
                <Carousel title={category.name} items={category.items} key={category.name} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6FFF1',
    },
});
