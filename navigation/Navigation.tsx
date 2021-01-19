import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import { Image } from "react-native";
import Welcome from "../screens/Welcome";
import TestDetailScreen from "../screens/TestDetailScreen";
import {theme} from "../constants";
import Login from "../screens/Login";


const Stack = createStackNavigator();

const Navigation = ()=> {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome"
                             screenOptions={{
                                 headerStyle: {
                                     height: theme.sizes.base * 4,
                                     backgroundColor: theme.colors.white, // or 'white
                                     borderBottomColor: "transparent",
                                     elevation: 0 // for android
                                 },
                                 headerBackImage: <Image source={require("../assets/icons/back.png")} />,
                                 headerShown: false,
                                 headerLeftContainerStyle: {
                                     alignItems: "center",
                                     marginLeft: theme.sizes.base * 2,
                                     paddingRight: theme.sizes.base
                                 },
                                 headerRightContainerStyle: {
                                     alignItems: "center",
                                     paddingRight: theme.sizes.base
                                 },

                             }}>

                <Stack.Screen name="Welcome" component={Welcome}/>
                <Stack.Screen name="Details" component={TestDetailScreen}/>
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
