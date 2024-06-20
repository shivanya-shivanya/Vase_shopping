import { ActivityIndicator, Alert, Dimensions, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message';


const width = Dimensions.get('screen').width;

const Login = ({ navigation }) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigtion = useNavigation();


    const handleLogin = () => {

        if (!email || email.trim().length === 0) {
            Toast.show({
                type: 'error',
                text1: 'Please enter email!',
            });
            return false;
        } else if (!password || password?.length === 0) {
            Toast.show({
                type: 'error',
                text1: 'Please enter password!',
            });
            return false;
        }

        navigation.replace('HomeScreen');
        Toast.show({
            type: 'success',
            text1: 'Login Successfully!',
        });

    };

    return (
        <SafeAreaView style={styles.container}>

            <View>
                <View style={styles.labelStyle}>
                    <Text style={styles.labelText}>Email</Text>
                </View>

                <View>
                    <TextInput
                        style={styles.inputStyles}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder='Enter your Email Address'
                        placeholderTextColor={"#000"}
                        maxLength={25}
                    />

                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <View style={styles.labelStyle}>
                    <Text style={styles.labelText}>Password</Text>
                </View>

                <View>
                    <TextInput
                        style={styles.inputStyles}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder='Password'
                        placeholderTextColor={"#000"}
                        maxLength={25}
                    />


                </View>
            </View>

            <View style={{ marginTop: 20 }}>
                <TouchableOpacity style={styles.btnstyle}
                    onPress={() => handleLogin()}
                >
                    <Text style={styles.signInTextStyle}>
                        {/* {loading ? <ActivityIndicator style={{ justifyContent: 'center', alignSelf: 'center' }} color={'#fff'} /> 
                        :  */}
                        Sign In</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff", paddingTop: 80 },
    logoImgStyle: { width: 250, height: 200, resizeMode: 'cover', alignSelf: 'center' },
    inputStyles: { borderColor: "#000", borderWidth: 0.8, width: width * 0.9, borderRadius: 10, alignSelf: 'center', paddingLeft: 10, color: "#000" },
    envelopeStyle: { position: 'absolute', left: 35, top: 12 },
    labelStyle: { marginLeft: 25, marginBottom: 10 },
    labelText: { color: "#000", fontSize: 14, fontWeight: '600' },
    eyeStyle: { position: 'absolute', right: 30, top: 15 },
    forgotTextStyle: { color: "#000", fontSize: 14, fontWeight: '500', textDecorationLine: 'underline', textAlign: 'right', marginRight: 22, marginTop: 10 },
    btnstyle: { padding: 12, backgroundColor: "#000", borderColor: "#000", borderRadius: 25, width: width * 0.8, alignSelf: 'center', marginTop: 25, borderWidth: 1 },
    signInTextStyle: { color: "#fff", fontSize: 14, fontWeight: '600', textAlign: 'center' },
    emptyView: { width: width * 0.15, height: 1, backgroundColor: "#000" },
    craeteBtnstyle: {
        padding: 12, backgroundColor: ' #000', borderColor: "#000", borderRadius: 25, width: width * 0.8, alignSelf: 'center', marginTop: 10, borderWidth: 1
    },
    orText: { color: "#000", fontSize: 14, fontWeight: '600' },
    errorText: { color: 'red', fontSize: 12, marginTop: 5, marginLeft: 30 },
})