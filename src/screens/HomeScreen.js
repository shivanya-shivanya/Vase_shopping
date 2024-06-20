import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image, Text
} from 'react-native';

import PdtCard from '../components/PdtCard';

import ProductAPI from '../APIs/MyAPI';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addItem } from '../store/cartSlice';

function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    setLoading(true);

    ProductAPI.get('products')
      .then(async function (response) {
        setData(response?.data?.products);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }

  const dispatch = useDispatch()

  return (
    <View style={styles.con}>
      <Text
        style={{ alignSelf: 'center', fontSize: 20, marginVertical: 15, color: '#000', fontWeight: '700' }}>
        Shop the Product You Love
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        data={data}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({ item }) => (
          <PdtCard
            title={item.title}
            price={item.price}
            image={item.thumbnail}
            item={item}
            onPress={() => { dispatch(addItem(item)) }}
          />
        )}
      />
      <ActivityIndicator
        animating={loading}
        size="large"
        color="#000"
        style={{ position: 'absolute', top: '50%', left: '48%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: '#f7f6ff',
  },
  text: {
    marginLeft: 21,
    fontSize: 19,
    marginBottom: 13,
  },
});
export default HomeScreen;
