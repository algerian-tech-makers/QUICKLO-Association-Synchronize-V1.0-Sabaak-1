import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Dimensions,StatusBar,Platform  } from 'react-native';

function VerifPassword() {
    return (
        <View style={styles.content} >
            <Image source={require('../assets/ArrowLeft.png')} />
            <Text style={styles.textHead}>Enter Your Password to switch !</Text>

            <TextInput 
             placeholder='Enter your password'
             style={styles.input} 
             
             />

             <View style={styles.btn} >
                <Text style={styles.btnText}>Continue</Text>
             </View>
          
         
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
    textHead:{
        fontSize:18,
        color:"#0C1D4A",
        marginTop:30,
        marginBottom:40,
    },
    input:{
        padding:20,
        color:'#C4C3C3',
        borderColor:'#E9EBED',
        borderWidth:2,
        borderRadius:12
    },
    btn:{
        marginTop:30,
        width:'100%',
        height:58,
        padding:20,
        backgroundColor:'#00A5E0',
        borderRadius:12,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50
    },
    btnText:{
        color:'#FFFFFF',
        fontSize:16
    
    }
})

export default VerifPassword;