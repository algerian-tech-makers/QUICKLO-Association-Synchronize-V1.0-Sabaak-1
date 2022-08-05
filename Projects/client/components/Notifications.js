import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image } from 'react-native';

function Notifications() {
  return (
    <View style={styles.content}>
      <Text style={{marginTop: 20, marginLeft: 20, fontSize: 24, fontWeight: '400'}}>Notifications</Text>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', marginTop: 30}}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignContent: 'center', paddingHorizontal: -16}}>
          <Text style={{marginHorizontal: 16, fontSize: 16, fontWeight: '500', paddingBottom: 3, borderColor: '#00A5E0', borderBottomWidth: 3}}>Activities</Text>
          <Text style={{color: '#00000080', marginHorizontal: 16, fontSize: 16, fontWeight: '500'}}>Infos</Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../assets/blueX.png')} style={{height: 20, width: 20}} />
        </TouchableOpacity>
      </View>
      <View
        style={{
            borderBottomColor: '#666666',
            borderBottomWidth: StyleSheet.hairlineWidth,
        }}
        />
        {['Just Now','10min','2 days','1 week', '1 month'].map((child) => (
          <>
            <View style={{marginTop: 30, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: -8}}>
              <Image source={require('../assets/chajra.png')} style={{height: 40, width: 40, marginHorizontal: 8}} />
              <View style={{marginHorizontal: 8, display: 'flex', paddingVertical: -4}}>
                <Text style={{marginVertical: 4}}>Nas El-khir added an activity</Text>
                <Text style={{color: '#460A0A66', marginVertical: 4}}>{child}  .</Text>
              </View>
            </View>
            <View
            style={{
                marginTop: 20,
                borderBottomColor: '#666666',
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}
            />
          </>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
      paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight + 50 : 0,
      paddingBottom: 20,
      paddingHorizontal: 20, 
  },
})

export default Notifications