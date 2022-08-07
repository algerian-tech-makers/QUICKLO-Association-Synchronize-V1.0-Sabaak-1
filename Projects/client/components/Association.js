import React from 'react';
import { Text, View,StyleSheet,Platform,StatusBar, Image,Dimensions } from 'react-native';

function Association() {
    return (
        <View style={styles.content}>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../assets/ArrowLeft.png')} style={{width: 20, height: 10, marginLeft: 8}} />
                <Text style={{marginLeft: 100, fontSize: 18, fontWeight: "400"}}>Association</Text>
            </View>
            <View
                style={{
                    borderBottomColor: '#E9EBED',
                    borderBottomWidth: 1,
                    marginVertical: 30,
                    width: Dimensions.get('window').width,
                    marginLeft: -20
                }}
                />
                <View style={{display: "flex", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 8}}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <Image source={require('../assets/nas.png')} style={{width: 53, height: 53, borderRadius: 50, borderWidth: 2, borderColor: "#00A5E0"}} />
                        <View style={{display: 'flex', justifyContent: 'center', marginLeft: 10}}>
                            <Text>Nas-Elkhir</Text>
                            <Text style={{color: '#919191', fontSize: 12, fontWeight: '400', marginTop: 2}}>@El-khir</Text>
                        </View>
                    </View>
                    <Text style={{color:"#00A5E0", fontSize: 12, fontWeight: '400'}}>Follow</Text>
                </View>
                <Text style={{color: '#919191', fontSize: 14, fontWeight: '400', marginHorizontal: 8, marginTop: 20}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <View
                    style={{
                        borderBottomColor: '#E9EBED',
                        borderBottomWidth: 1,
                        marginVertical: 30,
                        width: Dimensions.get('window').width,
                        marginLeft: -20
                    }}
                    />
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 8}}>
                    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 12, fontWeight: '600', marginBottom: 2}}>Followers</Text>
                        <Text style={{color: '#919191', fontSize: 12, fontWeight: '400'}}>5.2K</Text>
                    </View>
                    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 12, fontWeight: '600', marginBottom: 2}}>Activities</Text>
                        <Text style={{color: '#919191', fontSize: 12, fontWeight: '400'}}>152</Text>
                    </View>
                    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 12, fontWeight: '600', marginBottom: 2}}>Members</Text>
                        <Text style={{color: '#919191', fontSize: 12, fontWeight: '400'}}>350</Text>
                    </View>
                    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 12, fontWeight: '600', marginBottom: 2}}>Review</Text>
                        <Text style={{color: '#919191', fontSize: 12, fontWeight: '400'}}>4.7/5</Text>
                    </View>
                </View>
                <View
                    style={{
                        borderBottomColor: '#E9EBED',
                        borderBottomWidth: 1,
                        marginVertical: 30,
                        width: Dimensions.get('window').width,
                        marginLeft: -20
                    }}
                    />
        </View>
    );
}
const styles = StyleSheet.create({
    content: {
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight + 50 :0,
        padding:20, 
        backgroundColor:"#FFFFFF",
        height:Dimensions.get("window").height
    },
})

export default Association;