import React, { useCallback, useState } from "react";
import { View, StyleSheet,Text } from "react-native";
import moment from "moment";

const getFormattedOrderDate = (date) => moment(date).format("MMMM Do , hh:mm");

export default function OrderItem({ order }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleOnDetails = useCallback(() => setShowDetails((s) => !s), []);

  return (
    <View style={styles.con}>
      <Text
        
        style={{
          textTransform: "uppercase",
          fontSize: 17,
          color: "red",
          marginBottom: 5,
        }}
      >
        Datails :
      </Text>
      <View style={{ height: 1, width: "100%", backgroundColor: "red" }} />
      <View style={styles.summary}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <Text>TotalPrice </Text>
            <Text>Date</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              left: "220%",
            }}
          >
            <Text style={styles.totalAmount}>
              {Math.abs(order.totalAmount).toFixed(2)} $
            </Text>
            <Text style={styles.date}>
              {getFormattedOrderDate(order.date)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
    padding: 15,
    marginLeft: 20,
  },
  summary: {
    alignSelf: "stretch",
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  totalAmount: {
    color: "red",
    alignSelf: "flex-end",
  },
  date: {
    color: "red",
    alignSelf: "flex-end",
  },
  details: {
    alignSelf: "stretch",
  },
});
