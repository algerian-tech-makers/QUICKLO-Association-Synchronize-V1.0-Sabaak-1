import React, { useState } from 'react';
import { Text, View, StyleSheet,Platform,StatusBar, Image } from 'react-native';
import SearchBar from './SearchBar';

function Activity() {
    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState();

    return (
        <View style={styles.content}>
            <View style={styles.flex}>
                <Text style={styles.h1} >Welcome, <Text style={styles.textBold}>Sohaib</Text></Text> 
                <Image source={require("../assets/client.jpeg")} style={styles.img}  />
            </View>
            <Text style={styles.title}>Find The best association to help !</Text>
            <SearchBar />
            <View style={styles.flex}>
                <Text style={styles.h1} >Welcome, <Text style={styles.textBold}>Sohaib</Text></Text> 
                <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <Image source={require("../assets/arrowBottom.png")} />
                  <Text style={{color: "#00A5E0", paddingHorizontal: 10}}>Social</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight + 30 :0,
        paddingBottom: 20,
        paddingHorizontal: 20, 
    },
    flex:{
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        width:"100%",
        marginBottom:50
    },
    h1:{
        color:"#231D25",
        fontSize:20
    },
    img:{
       width:40,
       height: 40,
       borderRadius: 50
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
      },
      textBold: {
        fontWeight: "bold"
      },
      title: {
        fontSize: 28, 
        fontWeight: "400", 
        lineHeight: 36,
      }
  });
  

export default Activity;