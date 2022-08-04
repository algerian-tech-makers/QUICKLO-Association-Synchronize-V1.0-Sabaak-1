import React from 'react';
import { Image, Text, View, StyleSheet, Platform, StatusBar, TextInput, Dimensions } from 'react-native';

function CreateAssociation() {
    return (
        <View style={styles.content} >
            <Image source={require('../assets/ArrowLeft.png')} />
            <Text style={styles.helloText} >Hello Again !</Text>
            <Text style={styles.createText}>Create your Own Association</Text>

            <View style={styles.associationBorder}>
                <Text style={styles.association} >Association name</Text>
                <Text style={styles.associationName}>EL-Akouas</Text>
            </View>

            <View style={{marginTop:20}} >
            <TextInput style={styles.input}
            placeholder='E-Mail'
            keyboardType='email-address'
             />
             <View style={{position:"relative"}} >
                <TextInput style={styles.input}
                placeholder='Category'
                keyboardType='default'
                />
                <Image source={require("../assets/ChevIcon.png")} style={{position:'absolute',right:20,top:"40%"}}   />
               
             </View>
            
            <TextInput style={styles.input}
            placeholder='Year Of Creation'
            keyboardType='numeric'
             />
              <TextInput style={styles.input}
            placeholder='Number Of Members'
            keyboardType='numeric'
             />
             
              <TextInput style={styles.input}
            placeholder='Enter Your Password'
            keyboardType='visible-password'
             />
            </View>
            <View style={styles.btn} >
                <Text style={styles.next} >Next</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    content:{
        position:'relative',
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight +50 :0,
        padding:20,
        backgroundColor:"#FFFFFF",
        height:Dimensions.get("window").height
    },
    helloText:{
        fontSize:40,
        fontWeight:'600',
        color:'#1A1B23'
    },
    createText:{
        fontSize:14,
        fontWeight:'400',
        color:"#A1A1A1"
    },
    associationBorder:{
        borderWidth:1,
        padding:15,
        borderColor:"#00A5E0",
        marginTop:40
    },
    association:{
        fontSize:16,
        fontWeight:'400',
        color:"#00A5E0"
    },
    associationName:{
        marginTop:10,
        fontSize:16,
        fontWeight:'500',
        color:"#1A1B23"
    },
    input: {
        borderRadius:12,
        height: 68,
        width:"100%",
        borderWidth: 2,
        borderColor:"#E9EBED",
        padding: 10,
        fontSize:14,
        color:"#C4C3C3",
        marginBottom:17,
      },
      btn:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#00A5E0',
        height:58
      },
      next:{
        color:"#FFFFFF",
        fontSize:16,
        fontWeight:'600'
      }
})

export default CreateAssociation;