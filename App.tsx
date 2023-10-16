import 'react-native-gesture-handler';
import React from 'react';
import Config from 'react-native-ui-lib/config';
// require('react-native-ui-lib/config').setConfig({ appScheme: 'dark' });
import {
    VideoScreen,
    HomeScreen,
    VideoCatalogScreen
} from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Screens } from './commonTypes';
import { Colors } from 'react-native-ui-lib';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function App() {
    Config.setConfig({ appScheme: 'light' });

    Colors.loadSchemes({
        light: {
            screenBG: Colors.white,
            textColor: Colors.black,
            moonOrSun: Colors.grey80,
            mountainForeground: Colors.violet10,
            mountainBackground: Colors.violet20,
            $backgroundSuccess: Colors.green40,
            $backgroundSuccessLight: Colors.green20,
        },
        dark: {
            screenBG: Colors.black,
            textColor: Colors.white,
            moonOrSun: Colors.grey80,
            mountainForeground: Colors.violet10,
            mountainBackground: Colors.violet20,
            $backgroundSuccess: Colors.green40,
            $backgroundSuccessLight: Colors.green20,
        },
    });

    const Tab = createBottomTabNavigator();
    const VideoStack = createNativeStackNavigator();

    function VideoStackScreen() {
        return (
            <VideoStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <VideoStack.Screen
                    name={Screens.VideoCatalogScreen}
                    component={VideoCatalogScreen}
                />
                <VideoStack.Screen
                    name={Screens.VideoScreen}
                    component={VideoScreen}
                />
            </VideoStack.Navigator>
        );
    }

    return (
        <React.StrictMode>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarActiveTintColor: '#e91e63',
                        tabBarActiveBackgroundColor: Colors.screenBG,
                    }}
                >
                    <Tab.Screen name='Home' component={HomeScreen} />
                    <Tab.Screen name='Videos' component={VideoStackScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </React.StrictMode>
    );
}

/*
<Stack.Navigator
    screenOptions={{
        headerShown: false,
        contentStyle:{
            backgroundColor:Colors.screenBG
        }
    }}
>
    <Stack.Screen name={Screens.HomeScreen} component={HomeScreen} />
    <Stack.Screen name={Screens.VideoScreen} component={VideoScreen} />
    <Stack.Screen name={Screens.AboutScreen} component={AboutScreen} />
</Stack.Navigator>
*/
