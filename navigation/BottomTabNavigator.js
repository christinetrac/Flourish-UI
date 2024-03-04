import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TAB_OPTIONS } from "../utils/constants";
import HomeIcon from "../assets/icons/home.svg";
import ListIcon from "../assets/icons/list.svg";
import SearchIcon from "../assets/icons/search.svg";
import UserIcon from "../assets/icons/user.svg";
import { HomeNavigator } from "./HomeNavigator";
import { SearchNavigator } from "./SearchNavigator";
import { ListNavigator } from "./ListNavigator";
import { ProfileNavigator } from "./ProfileNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
      <Tab.Navigator
        initialRouteName={TAB_OPTIONS.home}
        screenOptions={{
          tabBarActiveTintColor: "#323F00",
          tabBarInactiveTintColor: "#545454",
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 70,
            paddingBottom: 14,
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name={TAB_OPTIONS.home}
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <HomeIcon width={30} height={30} color={color} />
            ),
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name={TAB_OPTIONS.list}
          component={ListNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <ListIcon width={30} height={30} color={color} />
            ),
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name={TAB_OPTIONS.search}
          component={SearchNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <SearchIcon width={25} height={25} color={color} />
            ),
            unmountOnBlur: true,
          }}
        />
        <Tab.Screen
          name={TAB_OPTIONS.profile}
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <UserIcon width={30} height={30} color={color} />
            ),
            unmountOnBlur: true,
          }}
        />
      </Tab.Navigator>
  );
};

export { BottomTabNavigator };
