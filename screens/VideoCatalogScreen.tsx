import React from 'react';
import { VideosGroup } from '../components/VideosGroup';
import { Button, Colors, Image, View } from 'react-native-ui-lib';
import { Layout } from '../components/Layout';
import { NavigationProps, Screens } from '../commonTypes';
import { ScrollView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const VideoCatalogScreen = (props: NavigationProps) => {
    return (
        <Layout style={{ marginHorizontal: 16 }}>
            <ScrollView>
                <GestureHandlerRootView>
                    <VideosGroup detaultSemester="Fall 2022" navigation={props.navigation} />
                </GestureHandlerRootView>
            </ScrollView>
        </Layout>
    );
};

export { VideoCatalogScreen };
