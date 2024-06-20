import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import NewOrderScreen from "../screens/NewOrderScreen";
import InitialScreen from "../screens/InitialScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";



const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="InitialScreen">
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewOrder" component={NewOrderScreen} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
