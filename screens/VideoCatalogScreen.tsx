import React from 'react';
import { EpisodesGroup } from '../components/EpisodesGroup';
import { Button, Colors, Image, View } from 'react-native-ui-lib';
import { Layout } from '../components/Layout';
import { NavigationProps, Screens } from '../commonTypes';
import { ScrollView } from 'react-native';

const VideoCatalogScreen = (props: NavigationProps) => {
    console.log(Colors.screenBG);

    return (
        <Layout style={{ marginHorizontal: 16 }}>
            <Image
                style={{ width: 150, height: 72.25, marginBottom: 12 }}
                source={require('../assets/better-watch-saul-logo.png')}
            />
            <ScrollView>
                <EpisodesGroup defaultSeason={1} navigation={props.navigation} />
            </ScrollView>
        </Layout>
    );
};

export { VideoCatalogScreen };

//https://d34lypc6o619vf.cloudfront.net/bcs%205-1.mp4