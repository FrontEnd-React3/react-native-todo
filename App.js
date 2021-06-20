import Todo from "./Todo";
import React, { useState, useEffect } from "react";
import { BarChart, LineChart } from "react-native-chart-kit";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  Button,
  Keyboard,
  TextInput,
  Text,
  ScrollView,
  View,
  Dimensions
} from "react-native";
// import { uuid } from 'uuidv4
export default function App() {
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState("");
  const [total, setTotal] = useState(0);
  const [labels, setLabels] = useState([]);
  const [gigs, setGigs] = useState([
    { description: "freelancing1", amount: 499, date: new Date() },
    { description: "freelancing2", amount: 299, date: new Date() },
    { description: "freelancing3", amount: 199, date: new Date() },
    { description: "freelancing4", amount: 599, date: new Date() }
  ]);
  const [dataPoints, setDataPoints] = useState([
    { description: "", amount: "", timestamp: new Date() }
  ]);
  useEffect(() => {}, []);
  useEffect(() => {
    setTotal(gigs.reduce((total, gig) => total + Number(gig.amount), 0));
  }, [gigs]);

  const addGig = () => {
    setGigs([...gigs, { description: description, amount: amount }]);
    setDescription("");
    setAmount("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.headTitle}>Income tracker</Text>
        </View>
        <Text style={styles.Title}>
          Total Income: {total}
          <Text style={styles.Money}> €</Text>
        </Text>
        <TextInput
          style={styles.todoInput}
          value={description}
          placeholder="Enter a description"
          onChangeText={text => setDescription(text)}
        />
        <TextInput
          style={styles.todoInput}
          value={amount}
          placeholder="Enter an amount"
          keyboardType="numeric"
          onChangeText={text => setAmount(text)}
        />
        <Button
          disabled={!amount && !description}
          color="orange"
          backgroundColor="lime"
          style={styles.mybutn}
          onPress={addGig}
          title="Add Job"
        />
        {gigs.map(gig => (
          <View>
            <Text style={styles.todoOutput}>{gig.description}</Text>
            <Text style={styles.todoOutput}>{gig.amount}</Text>
          </View>
        ))}
        <View>
          <LineChart
            data={{
              labels: ["Winter", "Spring", "Summer", "Autumn"],
              datasets: [
                {
                  data: [
                    gigs[0].amount,
                    gigs[1].amount,
                    gigs[2].amount,
                    gigs[3].amount
                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width * "0.90"} // from react-native
            height={220}
            yAxisLabel="€"
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16
              },
              propsForDots: {
                r: "5",
                strokeWidth: "4",
                stroke: "#ffa726"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  headTitle: {
    fontSize: 30,
    marginBottom: 40,
    textTransform: "uppercase",
    color: "orange",
    textAlign: "center",
    marginTop: 100
  },
  Money: {
    fontSize: 15,
    color: "lightgrey"
  },
  Title: {
    fontSize: 30,
    marginBottom: 40,
    color: "white",
    textAlign: "center",
    color: "lightgrey"
  },
  todoInput: {
    padding: 4,
    margin: 6,
    textAlign: "center",
    height: 40,
    width: "100%",
    borderColor: "grey",
    borderWidth: 1,
    backgroundColor: "white"
  },
  todoOutput: {
    padding: 4,
    textAlign: "center",
    width: "100%",
    color: "lightgrey"
  },
  todo: {
    margin: 40,
    color: "white"
  },
  mybutn: {
    backgroundColor: "red",
    marginBottom: 20
  }
});
