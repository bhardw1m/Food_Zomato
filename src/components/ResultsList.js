import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import ResultsDetail from "../components/ResultsDetail"
import {withNavigation} from 'react-navigation'

const ResultsList = ({title, resultsByPrice, navigation}) => {

    if (!resultsByPrice.length) {
        return null;
    }
    
    return <View>
        <Text style = {styles.title}> {title}</Text>
       
        <FlatList 
            showsHorizontalScrollIndicator = {false}
            horizontal
            data = {resultsByPrice}
            keyExtractor = {result => result.restaurant.id}
            renderItem = {({ item }) => 
                {
                    return ( <TouchableOpacity onPress = {() => {navigation.navigate('ResultsShow', { id: item.restaurant.id})}}>
                    <ResultsDetail result = {item.restaurant} />
                    </TouchableOpacity> )
                    }
        }
        
        
        />

    </View>

}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 5,
        marginBottom: 5
        
    },
    pricetag: {
        fontSize: 20,
        
    }
});

export default withNavigation(ResultsList);