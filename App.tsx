import 'react-native-gesture-handler';
import React from 'react';
import Config from 'react-native-ui-lib/config';
// require('react-native-ui-lib/config').setConfig({ appScheme: 'dark' });
import {
    VideoScreen,
    AboutScreen,
    VideoCatalogScreen
} from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Screens } from './commonTypes';
import { Colors, Icon } from 'react-native-ui-lib';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ImageSourcePropType } from 'react-native';


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

    const icons: Record<string, ImageSourcePropType > = {
        "About": require('./assets/icons/info.png'),
        "Videos": require('./assets/icons/video.png')
    }

    return (
        <React.StrictMode>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route})=> ({
                        headerShown: false,
                        tabBarActiveTintColor: '#00509a',
                        tabBarActiveBackgroundColor: Colors.screenBG,
                        tabBarIcon: () => {
                            return (
                                <Icon
                                    source={icons[route.name]}
                                    size={24}
                                />
                            );
                        },
                    })}
                >
                    <Tab.Screen name='About' component={AboutScreen} />
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
    <Stack.Screen name={Screens.AboutScreen} component={AboutScreen} />
    <Stack.Screen name={Screens.VideoScreen} component={VideoScreen} />
    <Stack.Screen name={Screens.AboutScreen} component={AboutScreen} />
</Stack.Navigator>
*/
