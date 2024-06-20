import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const InitialScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.conatiner}>
            <View style={styles.imgContainer}>
                <Image source={require('../assets/icons/logo.png')} style={styles.imgStyle} />
            </View>
            <View style={[styles.new, { marginTop: -15 }]}>
                <Text style={styles.txt}>Shop with us!</Text>
            </View>
            <View style={styles.subContainer}>
                <View>
                    <Text style={styles.txt}>New collection</Text>
                </View>

                <TouchableOpacity style={styles.rightArrow} onPress={() => navigation.navigate('HomeScreen')}>
                    <Image source={require('../assets/icons/rightArrow.png')} style={styles.rightArrowStyle} />
                </TouchableOpacity>
            </View>
            <View style={styles.bannerContainer} onPress={() => navigation.navigate('HomeScreen')}>
                <Image source={require('../assets/icons/shopping.jpg')} style={styles.bannerStyle} />
            </View>
        </SafeAreaView>
    )
}

export default InitialScreen;
const styles = StyleSheet.create({
    conatiner: { flex: 1, backgroundColor: '#fff', paddingTop: 40, },
    imgContainer: { alignSelf: 'flex-start', paddingHorizontal: 5 },
    imgStyle: { width: Dimensions.get('screen').width - 140, resizeMode: 'contain', height: 120 },
    txt: { fontFamily: '500', fontSize: 18, color: '#000' },
    rightArrowStyle: { width: 20, height: 20, resizeMode: 'contain' },
    subContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '90%', alignSelf: 'center', paddingTop: 120, borderBottomWidth: 0.8, borderBottomColor: '#000', paddingBottom: 8 },
    new: { paddingHorizontal: 32 },
    bannerContainer:{alignSelf:'center',marginTop:20},
    bannerStyle:{width: 410,height:430,resizeMode:'cover'}
});