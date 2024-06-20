import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { addItem } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useNavigation } from '@react-navigation/native';

const ProductDetailScreen = ({ route }) => {
    console.log("route?.params>>", route?.params?.item)
    const { items } = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.con}>
            <View style={styles.imageCon}>
                <Image style={{ height: 250, width: 250, resizeMode: 'cover' }} source={{ uri: route?.params?.image }} />
            </View>
            <ScrollView>
                <View style={styles.titleView}>
                    <Text style={[styles.title, { fontSize: 20 }]}>{route?.params?.title}</Text>
                </View>
                <View style={styles.titleView}>
                    <Text style={styles.title}>${route?.params?.price}</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => { dispatch(addItem(route?.params?.item)) }}>
                    <Text style={styles.txt}>Add to cart</Text>
                </TouchableOpacity>
                <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                    <Text style={styles.Rating}>Rating: {route?.params?.item?.rating}</Text>
                    <Text style={[styles.Rating, { paddingTop: 8 }]}>Brand: {route?.params?.item?.brand}</Text>
                    <Text style={[styles.Rating, { paddingTop: 8, color: route?.params?.item?.availabilityStatus === "In Stock" ? 'green' : "#000" }]}>Availability Status: {route?.params?.item?.availabilityStatus}</Text>
                    <Text style={[styles.Rating, { paddingTop: 8 }]}>MinimumOrder Quantity: {route?.params?.item?.minimumOrderQuantity}</Text>
                </View>
                <View style={{ width: '90%', alignSelf: 'center',marginBottom:20 }}>
                    <Text style={[styles.Rating, { paddingBottom: 10 }]}>Details:</Text>
                    <Text style={styles.desc}>{route?.params?.item?.description}</Text>
                </View>
            </ScrollView>
            <TouchableOpacity
                style={{
                    backgroundColor: '#fff',
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 29,
                    right: 15,
                    borderRadius: 20.5,
                    flexDirection: "row",
                    width: 100,
                    borderColor: '#000',
                    borderWidth: 1
                }}
                onPress={() => {
                    navigation.navigate('NewOrder');
                }}>
                <Text style={{ color: "#000", fontSize: 20, width: 50, textAlign: "center" }}>
                    {items?.length}
                </Text>
                <Image
                    tintColor={"#000"}
                    source={require('../assets/icons/cart.png')}
                    style={{ height: 30, width: 30 }}
                />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default ProductDetailScreen;
const styles = StyleSheet.create({
    con: {
        flex: 1
    },
    imageCon: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFDFDF',
        height: '45%'
    },
    title: { fontSize: 20, fontWeight: '700', color: '#000', textAlign: 'center', paddingTop: 15 },
    btn: { padding: 15, backgroundColor: '#000', width: '93%', alignSelf: 'center', borderRadius: 10, marginTop: 20, marginBottom: 10 },
    txt: { fontSize: 16, fontWeight: '500', color: '#fff', textAlign: 'center' },
    Rating: { fontSize: 14, fontWeight: '500', color: '#000' },
    desc: { fontSize: 14, fontWeight: '500', color: '#888888', textAlign: 'justify' }
});