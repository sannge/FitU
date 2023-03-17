import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const HomePage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("./assets/background.png")}
      style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Fitness App</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.description}>
          Welcome to your fitness journey! Track your workouts and calorie
          intake to reach your fitness goals.
        </Text>
        <Button
          title="Calorie Intake Tracker"
          onPress={() => navigation.navigate("CalorieIntake")}
        />
        <Button
          title="Workout History"
          onPress={() => navigation.navigate("WorkoutHistory")}
        />
      </View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#9ac9ff",
          inactiveTintColor: "#fff",
          showLabel: false,
          style: {
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            backgroundColor: "#222",
          },
        }}>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="CalorieIntake" />
        <Tab.Screen name="WorkoutHistory" />
      </Tab.Navigator>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
  },
  header: {
    height: 50,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e6",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
  },
});

export default HomePage;
