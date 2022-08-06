import React, { useState } from 'react';
import { Text, View, StyleSheet,Platform,StatusBar, Image } from 'react-native';
import SearchBar from './SearchBar';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

function Activity() {

    return (
        <View style={styles.content}>
            <View style={styles.flex}>
                <Text style={styles.h1} >Welcome, <Text style={styles.textBold}>Sohaib</Text></Text> 
                <Image source={require("../assets/client.jpeg")} style={styles.img}  />
            </View>
            <Text style={styles.title}>Find The best association to help !</Text>
            <SearchBar />
            <View style={styles.flex}>
                <Text style={styles.h1} >Activities</Text> 
                <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                  <Image source={require("../assets/arrowBottom.png")} style={styles.iconTwo} />
                  <Text style={{color: "#00A5E0", paddingHorizontal: 10, fontWeight: 'bold'}}>Social</Text>
                </View>
            </View>
            <SwiperFlatList style={styles.swiperContainer}>
                {[1, 2, 3, 4].map((child) => (
                    <View style={styles.sliderOneChild}  >
                    <Image source={require("../assets/help.jpeg")} style={styles.imageHelp} />
                    <Text style={{marginVertical: 3, fontSize: 16, fontWeight: 'bold'}}>Cleaning Space !</Text>
                    <Text style={{marginVertical: 3}}>By Nas-Elkhir</Text>
                    </View>
                ))}
            </SwiperFlatList>
            <Text style={[styles.h1, {marginVertical: 20}]} >Explore Associations</Text> 
            <SwiperFlatList style={styles.swiperContainerTwo}>
                {[1, 2, 3, 4, 5, 6].map((child) => (
                    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingVertical: -3, marginHorizontal: 10}}>
                        <Image source={require("../assets/help.jpeg")} style={styles.imageAssociation} />
                        <Text style={{marginVertical: 3}}>Nas-Elkhir</Text>
                    </View>
                ))}
            </SwiperFlatList>
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
        marginBottom:20
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
      },
      iconTwo: {
        width: 10,
        height: 10
      },
      imageHelp: {
        width: 136,
        height: 136,
        borderRadius: 20,
        marginVertical: 3
      },
      imageAssociation: {
        width: 60,
        height: 60,
        borderRadius: 50,
        // add shadows for Android only
        elevation: 10,
 
        // add shadows for iOS only
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5
      },
      swiperContainer: {
        paddingHorizontal: -8
      },
      swiperContainerTwo: {
        paddingHorizontal: -10
      },
      sliderOneChild: {
        display: 'flex', 
        justifyContent: 'flex-start', 
        paddingVertical: -3, 
        marginHorizontal: 8
    }
  });
  

export default Activity;