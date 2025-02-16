import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Image, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";
import ProfileInfo from "../screens/ProfileInfo";
import LoginPage from "../screens/Login/LoginPage";
import ItemList from "../screens/InventoryItem/ItemList";
import InRequestList from "../screens/InventoryRequest/InRequestList";
import InRequestDocument from "../screens/InventoryRequest/InRequestDocument";
import AdjustmentList from "../screens/Adjustment/AdjustmentList";
import ItemUsage from "../screens/Reports/Item Usage Report/ItemUsage";
import AdjustmentForm from "../screens/Adjustment/AdjustmentForm";
import StockInList from "../screens/StockIn/StockInList";
import StockOutList from "../screens/StockOut/StockOutList";
import ItemDetails from "../screens/InventoryItem/ItemDetail";
import TicketList from "../screens/Ticket/TicketList";
import Newticket from "../screens/Ticket/Newticket"; 
import UserActivityHistory from "../screens/Reports/History";
 

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#BCD6FE",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
};

function ProfileTabIcon() {
  return (
    <View style={styles.profileContainer}>
      <Image
        source={require("../../assets/man.jpeg")}
        style={styles.profileImage}
      />
      <View style={styles.profileText}>
        <Text style={styles.profileName}>Femi John</Text>
      </View>
    </View>
  );
}

function AdminStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="ItemList"
        component={ItemList}
        options={{ title: "All Items" }}
      />

      <Stack.Screen
        name="ItemDetails"
        component={ItemDetails}
        options={{ title: "Item Details" }}
      />
      <Stack.Screen
        name="ItemUsageAnalysis"
        component={ItemUsage}
        options={{ title: "Item Usage Analysis Report" }}
      />
      <Stack.Screen
        name="InRequestList"
        component={InRequestList}
        options={{ title: "All InRequests" }}
      />
      <Stack.Screen
        name="InRequestDocument"
        component={InRequestDocument}
        options={{ title: "Inventory Request Document" }}
      />
      <Stack.Screen
        name="TicketList"
        component={TicketList}
        options={{ title: "All Issue Tickets" }}
      />
      <Stack.Screen
        name="Newticket"
        component={Newticket}
        options={{ title: "New ticket" }}
      />
      <Stack.Screen
        name="UserActivityHistory"
        component={UserActivityHistory}
        options={{ title: "Recent Activities" }}
      />

      <Stack.Screen
         name="AdjustmentForm"
         component={AdjustmentForm}
         options={{ title: 'New Adjustment' }}
      />

      <Stack.Screen
         name="StockInList"
         component={StockInList}
         options={{ title: 'Stock In' }}
      />

      <Stack.Screen
               name="StockOutList"
               component={StockOutList}
               options={{ title: 'Stock Out' }}
      />
 
         <Stack.Screen
           name="LoginPage"
           component={LoginPage}
           options={{ title: "Login" }}
         />
       </Stack.Navigator>
 

    </Stack.Navigator>
 
  );
}

function BottomNav() {
  return (
    <BottomTab.Navigator screenOptions={screenOptions}>
      <BottomTab.Screen
        name="Home"
        component={AdminStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={"black"} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileInfo"
        component={ProfileInfo}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <ProfileTabIcon />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomNav;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileText: {
    marginLeft: 10,
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  profileEmail: {
    fontSize: 14,
    color: "black",
  },
});
