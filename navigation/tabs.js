import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/Ionicons";
import Home from "../screens/Home/index.js";
import Favorites from "../screens/Favorites/index.js";
import Notifications from "../screens/Notifications/index.js";
import Account from "../screens/Account/index.js";
import { moderateScale } from "react-native-size-matters";

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#062743",
        inactiveTintColor: "#9ea9b3",
        tabStyle: {
          marginVertical: moderateScale(10),
        },
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="home-sharp" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="heart-sharp" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notifications}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="notifications-sharp" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="person-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
