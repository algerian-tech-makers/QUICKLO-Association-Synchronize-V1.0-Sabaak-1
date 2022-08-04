import React from 'react';
import { Text, View, StyleSheet,Platform,StatusBar, Image,useWindowDimensions,TextInput,Button  } from 'react-native';

function Activity() {
    return (
        <View style={styles.content}>
            <View style={styles.flex}>
                <Image source={require("../assets/ArrowLeft.png")} style={styles.img}  />
                <Text style={styles.h1} >Add Activity</Text> 
            </View>

           <Image style={styles.bigImg} source={require("../assets/activityPhoto.png")} />

           <View style={styles.border} >
                <Text style={{color:"#00A5E0",marginBottom:5,fontWeight:'400',fontSize:16}} >
                    Activity Name
                </Text>
                <Text style={{ color:"#1A1B23",fontWeight:'500',fontSize:21}}>
                    Restaurants for free !
                </Text>
           </View>

            <TextInput style={styles.input}
            placeholder='Description'
            keyboardType='default'
             />
             <View style={{position:"relative"}} >
                <TextInput style={styles.input}
                placeholder='Category'
                keyboardType='default'
                />
                <Image source={require("../assets/ChevIcon.png")} style={{position:'absolute',right:20,top:"40%"}}   />
               
             </View>
            
            <TextInput style={styles.input}
            placeholder='Date'
            keyboardType='default'
             />
           
           <Button style={styles.button} title="Add" />
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        position:'relative',
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight + 30 :0,
        paddingBottom: 20,
        paddingHorizontal: 20, 
    },
    flex:{
        display:"flex",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"center",
        width:"100%",
        marginBottom:50
    },
    h1:{
        textAlign:'center',
        color:"#231D25",
        fontSize:20
    },
    img:{
       position:'absolute',
       left:0,
       width:20,
    },
    bigImg:{
        width:'100%',
        borderRadius:8
    },
    border:{
        marginBottom:10,
        marginTop:10,
        borderWidth: 1.5,
        padding:20,
        borderRadius:8,
        borderColor:"#00A5E0"
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
      button:{
        backgroundColor:"#00A5E0",
        borderRadius:20,
        height:80
      }
  });
  

export default Activity;