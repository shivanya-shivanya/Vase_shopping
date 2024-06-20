import React, {useCallback} from 'react';
import {View, StyleSheet, SafeAreaView,Text } from 'react-native';

import OrdersList from '../components/Order/OrdersList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addItem, removeItem } from '../store/cartSlice';

const NewOrderScreen = ({navigation}) => {
 const dispatch =  useDispatch()

const handleItemAdd = (item) => {
  dispatch(addItem(item))
}
const handleItemRemove = (item) => {
  console.log("inside handleItemRemove")
  dispatch(removeItem(item))
}
const {items} = useSelector((state: RootState) => state.cart)
const totalSum = items.reduce((acc, item) => acc + item.sum, 0);



  return (
    <View style={styles.screen}>
      <SafeAreaView>

      <OrdersList
        onAdd={(item) => handleItemAdd(item)}
        onRemove={(item) => handleItemRemove(item)}
        deletable
        addable
        style={{marginBottom: 107}}
      />
      <View style={styles.orderSummary}>
        <Text  style={styles.total}>
          Total Price:{'   '}
          <Text style={styles.totalNumber}>
            {/* calc the total price */}
            {totalSum?.toFixed(2)} $
          </Text>
        </Text>
     
      </View>
      </SafeAreaView>

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 13
  },
  orderSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 20},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    padding: 15,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
   

  },
  total: {
    fontSize: 18,
    color: '#fff',
  },
  totalNumber: {
    color: '#fff',
  },
  btn:{
    backgroundColor:"#fff",
    padding:10,
    borderRadius:10,
  },
  txt:{
    fontSize:16,
    color:'#000'
  }
});

export default NewOrderScreen;
