import react from "react";
import {View, Text, StyleSheet } from 'react-native'

export default function CategoryPosts(){
    return(
        <View style={styles.container}>
            <Text>Post de uma categoria</Text>           
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