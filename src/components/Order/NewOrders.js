import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';


const NewOrders = ({
  title,
  image,
  qty,
  sum,
  onRemove,
  onAdd,
  addable,
  deletable,
}) => {
  return (
    <View style={styles.con}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{ color: '#000',paddingBottom:8 }}>
          {Math.abs(sum).toFixed(2)} $
        </Text>
        <Image
          source={{ uri: image }}
          style={{ resizeMode: 'cover', width: 100, height: 100, borderRadius: 10 }}
        />
      </View>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'column-reverse',
            justifyContent: 'space-between',
            width: 73,
          }}>
          {deletable && (
            <TouchableOpacity onPress={onRemove}>
              <Image source={require("../../assets/icons/minus.png")}
                tintColor={"#000"}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          )}
          <Text style={styles.qty}>{qty} </Text>

          {addable && (
            <TouchableOpacity onPress={onAdd}>
              <Image source={require("../../assets/icons/plus.png")}
                tintColor={"#000"}
                style={{ height: 30, width: 30 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    borderWidth: 2,
    marginTop: 5,
    borderColor: '#000',
    marginVertical: 17.5,
  },
  title: {
    fontSize: 16,
    color: "#000",
    fontWeight:'700',
    alignItems: 'center',
    justifyContent: 'center'

  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15

  },
  qty: {
    fontSize: 16,
    color: '#000',
    marginLeft: 11,
    marginVertical: 11,
  },
});

export default NewOrders;
