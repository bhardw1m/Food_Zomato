import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from "../components/SearchBar"

import ResultsList from "../components/ResultsList"
import useResult from "../Hooks/useResult"

let sRes = ''
const getRes = (val) => {
    sRes = val.term
    
}

const sInResult = (num) => {
    //console.log('sInResult called')
    return num > 1 || num < 1 ? 'results' : 'result'

}

const SearchScreen = () => {
    
   
    const [term, setTerm] = useState('')
   const [searchApi, results, errMessage, initialval] = useResult('')


    
    const resultsByPrice = (price) => {
       
            
        return results.filter(result => {
            return result.restaurant.price_range === price}) 
            
    }

    return <View style = {styles.scroll} >
        <SearchBar 
        term = {term} 
        onChangeTerm = {(newTerm) => {setTerm(newTerm)}}
        onTermSubmit = {() => {
            searchApi(term)
            getRes({term})
            setTerm('')
             
            } }    
        />
       

         {errMessage ? <Text>{errMessage}</Text> : null}
       
        {sRes ? (<Text style = {styles.textStyle}> You have searched "{sRes}"{"\n"}
        And we have found {results.length} {sInResult(results.length)} </Text>): 
        (<Text style = {styles.textStyle}> You have searched "{initialval}"{"\n"}
        And we have found {results.length} {sInResult(results.length)} </Text>)}
        <ScrollView>
        <ResultsList 
        resultsByPrice = {resultsByPrice(1)} 
        title = "Cost Friendly"
        />
         {resultsByPrice(1).length > 0 ? (<Text> Total Results in this category: {resultsByPrice(1).length}</Text>): null}

        <ResultsList 
        resultsByPrice = {resultsByPrice(3)}
        title = "Bit Pricier"
        />
        {resultsByPrice(2).length > 0 ? (<Text> Total Results in this category: {resultsByPrice(2).length}</Text>): null}

        <ResultsList 
        resultsByPrice = {resultsByPrice(4)} 
        title = "Big Spender"
        />
        {resultsByPrice(4).length > 0 ? (<Text> Total Results in this category: {resultsByPrice(4).length}</Text>): null}
        </ScrollView>
        </View>
       
}

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 25
    },
    scroll: {
        flex: 1,
        marginBottom: 15
    }
})

export default SearchScreen;