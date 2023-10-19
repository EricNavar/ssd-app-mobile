import React from 'react';
import { VideosGroup } from '../components/VideosGroup';
import { Button, Colors, Image, View } from 'react-native-ui-lib';
import { Layout } from '../components/Layout';
import { NavigationProps, Screens } from '../commonTypes';
import { ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const VideoCatalogScreen = (props: NavigationProps) => {
    return (
        <Layout style={{paddingHorizontal:20}}>
            <GestureHandlerRootView>
                <VideosGroup detaultSemester="Fall 2023" navigation={props.navigation} />
            </GestureHandlerRootView>
        </Layout>
    );
};

export { VideoCatalogScreen };
