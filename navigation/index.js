import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AuthStack from "./authStack";
import Tabs from "./tabs";

const Tab = createBottomTabNavigator();

// export const AppNavigator = () => (
//   <Tab.Navigator>
//     <Tab.Screen name="Feed" component={FeedScreen} />
//     <Tab.Screen name="Catalog" component={Catalog} />
//   </Tab.Navigator>
// );

const RootNavigation = () => {
  return (
    <NavigationContainer>
      {/* <AuthStack /> */}
      <Tabs />
    </NavigationContainer>
  );
};

export default RootNavigation;
