import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./tabs";
import Splash from "@Screens/Splash";
import Login from "@Screens/Login";
import Register from "@Screens/Register";
import Bording from "@Screens/Bording";

const AuthStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screensOptions={{ headerShown: false }} // disable default header
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Bording" component={Bording} />
    </Stack.Navigator>
  );
};

export default AuthStack;
