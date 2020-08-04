import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import zomato from "../api/zomato"

const ResultsShowScreen = ({navigation}) => {

    
    const id = navigation.getParam('id')
    
    const [result, setResult] = useState(null)
 
    const getBusineess = async (id) => {

        const response = await zomato.get(`/restaurant?res_id=${id}`)
        setResult(response.data)
        
    }

    

    useEffect (() => {
        getBusineess(id)
    }, [])

    if(!result) {
        return null;
    }
    console.log(result)
    return <View>
        <Text style = {styles.textStyle}>{result.name} </Text>
        <Image style = {styles.image} source = {{uri: result.thumb}}/>
        <Text> HighLights: </Text>
        <FlatList 
            data = {result.highlights}
            keyExtractor = {(love) => love}
            renderItem = {({ item }) => {
               
                return <Text>  {item}</Text>
            }}
        
        
        />
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    image: {
        width: 250,
        height: 120,
        marginBottom: 15
    }
})

export default ResultsShowScreen;