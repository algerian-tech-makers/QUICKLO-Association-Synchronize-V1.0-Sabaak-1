import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';

function Settings() {
  return (
    <View style={styles.content}>
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingVertical: -5}}>
        <View style={{borderColor: '#00A5E0', borderWidth: 1.0, borderRadius: 50, padding: 4, marginVertical: 5}}>
            <Image source={require("../assets/sohaib.png")} style={{borderRadius: 50, height: 60, width: 60}} />
        </View>
        <Text style={{fontSize: 20, fontWeight: '500', marginHorizontal: 5}}>Zouambia Sohaib</Text>
        <Text style={{color: '#919191', fontSize: 16, fontWeight: '400', marginVertical: 5}}>Volunteer</Text>
        <TouchableOpacity style={{backgroundColor: '#00A5E040', borderRadius: 12, paddingHorizontal: 100, paddingVertical: 20, marginVertical: 5}}>
            <Text style={{color: '#00A5E0', fontSize: 14, fontWeight: '700'}}>Your Association</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
            marginTop: 30,
            borderBottomColor: '#AAAAAA',
            borderBottomWidth: StyleSheet.hairlineWidth,
        }}
        />
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity>
            <Text style={{fontSize: 18, fontWeight: '500'}}>Donates</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
            marginTop: 30,
            borderBottomColor: '#AAAAAA',
            borderBottomWidth: StyleSheet.hairlineWidth,
        }}
        />
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity>
            <Text style={{fontSize: 18, fontWeight: '500'}}>Filters</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
            marginTop: 30,
            borderBottomColor: '#AAAAAA',
            borderBottomWidth: StyleSheet.hairlineWidth,
        }}
        />
      <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity>
            <Text style={{fontSize: 18, fontWeight: '500'}}>My Card</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
            marginTop: 30,
            borderBottomColor: '#AAAAAA',
            borderBottomWidth: StyleSheet.hairlineWidth,
        }}
        />
        <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 150}}>
            <TouchableOpacity style={{borderColor: '#FF4A4A', borderWidth: 2, borderRadius: 12, paddingHorizontal: 120, paddingVertical: 15 }}>
                <Text style={{fontSize: 18, fontWeight: '500', color: '#FF4A4A'}}>Log Out</Text>
            </TouchableOpacity>
        </View>
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

export default Settings