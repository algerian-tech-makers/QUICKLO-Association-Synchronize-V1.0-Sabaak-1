import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, Dimensions,StatusBar,Platform  } from 'react-native';

function PaymentHist() {
    const Dynamic =[
        {
            id:1,
            img:require('../assets/chajra.png'),
            price:"200$",
            arrow:require('../assets/ArrowRight.png'),
            association:'El Akouas '
        },
        {
            id:2,
            img:require('../assets/chajra.png'),
            price:"200$",
            arrow:require('../assets/ArrowRight.png'),
            association:'El Akouas '
        },
        {
            id:3,
            img:require('../assets/chajra.png'),
            price:"200$",
            arrow:require('../assets/ArrowRight.png'),
            association:'El Akouas '
        },
        {
            id:4,
            img:require('../assets/chajra.png'),
            price:"200$",
            arrow:require('../assets/ArrowRight.png'),
            association:'El Akouas '
        },
    ]
    return (
       <View style={styles.content}>
        <View style={styles.head}>
            <Image style={{marginRight:(Dimensions.get("window").width)/3.2}} 
             source={require('../assets/ArrowLeft.png')} />
            <Text style={styles.textHead} >Payment</Text>
        </View>
        
        <View style={styles.associations}>
            {Dynamic.map((item)=>{
                return(
                <View style={styles.SingleAssociations}  key={item.id} >
                    <Image source={item.img} />
                    <View style={styles.SingleAssociationsTextes}   >
                        <Text style={{color:'#818181' , fontWeight:'600'}} >{item.price}</Text>
                        <Image source={item.arrow} style={{marginLeft:15,marginRight:15}} />
                        <Text style={{color:'#818181' , fontWeight:'600'}} >{item.association}</Text>
                    </View>
                </View>
                )
            })}
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
    head:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    textHead:{
        fontSize:18,
        fontWeight:'400',
        color:'#231D25'
    },
    associations :{
        display:'flex',
        flexDirection:'column',
        marginTop:30,
        borderTopWidth:2,
        borderTopColor:'#E9EBED',
    },
    SingleAssociations:{
        borderBottomWidth:2,
        borderBottomColor:'#E9EBED',
        paddingBottom:20,
        paddingTop:20,
        paddingLeft:40,
        paddingRight:40,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    SingleAssociationsTextes:{
        marginLeft:30,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',  
    }
})

export default PaymentHist;