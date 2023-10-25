import React from 'react';
import { VideosGroup } from '../components/VideosGroup';
import { Layout } from '../components/Layout';
import { NavigationProps } from '../commonTypes';
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
