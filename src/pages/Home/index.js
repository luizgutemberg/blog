import react from "react";
import {View, Text, StyleSheet } from 'react-native'

export default function Home(){
    return(
        <View style={styles.container}>
            <Text>Página Home</Text>           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})