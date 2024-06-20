import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity,Text, Dimensions} from 'react-native';

function PdtCard({image, title, price, onPress,item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.con} onPress={()=> navigation.navigate('ProductDetailScreen',{image : image,title, price,item,})}>
      <View style={styles.imageCon}>
        <Image style={{height: 100, width:200,resizeMode:'cover'}} source={{uri: image}} />
      </View>
      <View style={{flex: 1,paddingTop:10}}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  con: {
    height: 190,
    width: 175,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'black',
    marginHorizontal: 10,
    marginVertical:10,
  },
  imageCon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontFamily: 'Audiowide-Regular',
    color: 'white',
    alignSelf:'center',
    marginVertical: 1.5,
  },
  price: {
    color: 'white',
    fontSize: 20,
    marginVertical: 1.5,
    alignSelf:'center'
  },
  bagCon: {
    backgroundColor: 'white',
    height: 31,
    width: 31,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 12,
    right: 12,
    borderRadius: 16.5,
  },
});
export default PdtCard;
