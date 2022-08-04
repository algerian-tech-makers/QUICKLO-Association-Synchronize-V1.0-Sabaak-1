import React from 'react';
import { Text, View,StyleSheet, Image,Platform,StatusBar } from 'react-native';
import donations from './donations';

function Donation() {
    console.log('Ok bb')
    return (
       <View style={styles.content}>
        <View style={styles.flexHead}>
             <Image source={require('../assets/ArrowLeft.png')} style={{position:"absolute",left:0, width:20}} />
             <Text style={{fontSize:18,color:"#231D25"}} >Donations</Text>
        </View>
        
        <View style={styles.flex3Items}>
            <View style={styles.flex} >
                <View style={styles.bgWhite}>
                <Image source={require('../assets/path.png')} style={styles.pathImg}  />
                </View>
                <View style={{marginLeft:30}} >
                    <Text style={{opacity:0.5}} >Wallet</Text>
                    <Text style={{color:"white"}} >1256,00 $</Text>
                </View>
            </View>
            <Image source={require('../assets/RightIcon.png')}/>
        </View>

        <View style={styles.Shadow} >
            <Image source={require('../assets/aid.png')} style={styles.aid} />
            <Text style={styles.AidFirstText} >Aid Mubarak</Text>
            <Text style={styles.AidSecondText} >$1256,00 / 1874,00</Text>
        </View>

        <Text style={{fontSize:16,fontWeight:"500",marginBottom:20}} >Donations</Text>
        {donations.map((donation)=>{
            return(
                <View key={donation.id} style={styles.donations} >
                    <Image source={donation.img} style={{marginRight:20}} />
                    <Text style={styles.donationText} >{donation.name} : {donation.price}</Text>
                </View>
            )
        })}  
       </View>
    );
}
const styles = StyleSheet.create({
    content: {
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight + 50 :0,
        padding:20, 
        backgroundColor:"#FFFFFF"
    },
    flexHead:{
        position:"relative",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        paddingBottom:10,
        borderBottomWidth:3,
        borderBottomColor:"#E9EBED"
    
    },
    flex3Items:{
        marginBottom:30,
        marginTop:30,
        padding:20,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#00A5E0",
        borderRadius:12
    },
    flex:{
        display:'flex',
        flexDirection:"row",
        alignItems:"center",
    },
    bgWhite:{
        padding:10,
        backgroundColor:"white",
        borderRadius:12
    },
    pathImg:{
        width:25,height:20
    },
    aid:{
        width:"100%",
        borderRadius:4
    },
    AidFirstText:{
        fontSize:16, fontWeight:"500", marginTop:10,marginBottom:10,opacity:0.7
    },
    AidSecondText:{
        borderTopWidth:1, borderTopColor:"#E9EBED", paddingTop:10
    },
    Shadow:{
        marginBottom:30,
        borderRadius:10,
    },
    donationText:{
        color:"#818181",fontSize:14,fontWeight:"400"
    },
    donations:{
        display:'flex',
        flexDirection:"row",
        alignItems:"center",
        marginBottom:20,
        paddingBottom:10,
        borderBottomWidth:3,
        borderBottomColor:"#E9EBED"
    }
})

export default Donation;