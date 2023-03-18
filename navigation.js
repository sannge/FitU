import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import RoutineScreen from "./screens/main-screens/HomeScreen";
import FastingScreen from "./screens/main-screens/FastingScreen";
import MoreScreen from "./screens/main-screens/MoreScreen";
import WorkoutScreen from "./screens/main-screens/WorkoutScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { theme } from "./NativeBaseTheme";

const Tab = createBottomTabNavigator();
const RoutineStack = createStackNavigator();
const WorkoutStack = createStackNavigator();
const FastingStack = createStackNavigator();
const MoreStack = createStackNavigator();

const options = {
  headerShown: false,
};

const screenOptions = ({ route }) => {
  let Component = Ionicons;
  return {
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Routines") {
        iconName = focused ? "ios-body" : "ios-body-outline";
        Component = Ionicons;
      } else if (route.name === "Workouts") {
        iconName = focused ? "fitness" : "fitness-outline";
        Component = Ionicons;
      } else if (route.name === "Fasting") {
        iconName = focused ? "timer" : "timer-outline";
        Component = Ionicons;
      } else if (route.name === "More") {
        iconName = focused ? "menu" : "menu-outline";
        Component = Ionicons;
      }

      return <Component name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: theme.colors.secondary[500],
    tabBarInactiveTintColor: "gray",
  };
};

const RoutineStackScreen = () => {
  return (
    <RoutineStack.Navigator>
      <RoutineStack.Screen
        name="RoutineStack"
        options={options}
        component={RoutineScreen}
      />
    </RoutineStack.Navigator>
  );
};

const WorkoutStackScreen = () => {
  return (
    <WorkoutStack.Navigator>
      <WorkoutStack.Screen
        name="WorkoutStack"
        options={options}
        component={WorkoutScreen}
      />
    </WorkoutStack.Navigator>
  );
};

const FastingStackScreen = () => {
  return (
    <FastingStack.Navigator>
      <FastingStack.Screen
        name="FastingStack"
        options={options}
        component={FastingScreen}
      />
    </FastingStack.Navigator>
  );
};

const MoreStackScreen = () => {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen
        name="MoreStack"
        options={options}
        component={MoreScreen}
      />
    </MoreStack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Routines"
        options={options}
        component={RoutineStackScreen}
      />
      <Tab.Screen
        name="Workouts"
        options={options}
        component={WorkoutStackScreen}
      />
      <Tab.Screen
        name="Fasting"
        options={options}
        component={FastingStackScreen}
      />
      <Tab.Screen name="More" options={options} component={MoreStackScreen} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
