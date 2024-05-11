import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./tabs";
import Splash from "@Screens/Splash";

const MainStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screensOptions={{ headerShown: false }} // disable default header
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
};

export default MainStack;
