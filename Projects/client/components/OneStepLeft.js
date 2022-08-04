import React from 'react';
import { Image, Text, View,StyleSheet,Platform,StatusBar,Dimensions, Button } from 'react-native';

function OneStepLeft() {
    return (
        <View style={styles.content} >
            <Image source={require('../assets/ArrowLeft.png')} />
            <Text style={styles.StepText} >One Step left !</Text>
            <Text style={styles.setupText} >Setup the Profile !</Text>
            <View style={styles.StepImgFlex}>
                <Image  source={require('../assets/StepImg.png')}/>
            </View>
            <Text style={styles.associationName} >El-Akouas</Text>
            <View style={{marginTop:40}}>
                <Text style={styles.discription} >Description</Text>
                <Text style={styles.textDiscription}>Lorem Ipsum est un texte d'espace réservé couramment utilisé dans les industries graphique</Text>
            </View>
            <View style={styles.btn}>
                <Text style={styles.createBtn} >Create</Text>
            </View>       
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        position:'relative',
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight + 50 :0,
        backgroundColor:'#FFFFFF',
        height:Dimensions.get("window").height,
        padding:20, 
    },
    StepText:{
        marginTop:30,
        fontSize:40,
        fontWeight:'600',
        color:"#1A1B23"
    },
    setupText:{
        fontSize:16,
        color:"#A1A1A1"
    },
    StepImgFlex:{
       display:'flex',
       flexDirection:'row',
       justifyContent:'center',
       marginTop:50
    },
    associationName:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'500',
        marginTop:10
    },
    discription:{
        textAlign:'center',
        color:"#545454",
        fontWeight:'500',
        marginBottom:10,
        fontSize:16
    },
    textDiscription:{
        color:"#CDCDCD",
        textAlign:'center',
        fontWeight:'400',
        fontSize:14,
        borderBottomWidth:2,
        paddingBottom:10,
        borderBottomColor:"#CDCDCD"
    },
    btn:{
        position:'absolute',
        bottom:Platform.OS === 'android' ? StatusBar.currentHeight + 50 :0,
        left:20,
        backgroundColor:"#00A5E0",
        width:'100%',
        height:58,
        textAlign:'center',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12
    },
    createBtn:{
        fontSize:16,
        color:"#FFFFFF",
        fontWeight:'500'
    }
})

export default OneStepLeft;