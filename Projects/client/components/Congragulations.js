import React from 'react';
import { Text, View,StyleSheet,Platform,StatusBar, Image,Dimensions } from 'react-native';

function Congragulations() {
    return (
        <View style={styles.content}>
            <Image style={{width:25}} source={require('../assets/ArrowLeft.png')} />
            <Text style={styles.head} >Congragulations</Text>
            <Text style={styles.textFinish} >You have finished !</Text>
            <Image style={styles.CongratsPhoto} source={require('../assets/congtasImg.png')} />
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        position:'relative',
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight + 50 :0,
        padding:20, 
        backgroundColor:"#FFFFFF",
        height:Dimensions.get("window").height
    },
    head:{
        color:"#1A1B23",
        fontSize:40,
        marginTop:40,
        fontWeight:'600'
    },
    textFinish:{
        color:"#A1A1A1",
        fontSize:16,
        marginTop:8
    },
    CongratsPhoto:{
        position:'absolute',
        top:'50%',
        left:Dimensions.get("window").width /3.2,
    }
})

export default Congragulations;