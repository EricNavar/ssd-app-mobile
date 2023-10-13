import React from 'react';
import { NavigationProps } from '../commonTypes';
import { Text } from 'react-native-ui-lib';
import { ScrollView } from 'react-native';
import { Layout } from '../components/Layout';

const HomeScreen = (props: NavigationProps) => {
    return (
        <Layout>
            <ScrollView>
                <Text text50 style={{marginBottom:20}}>Society of Software Developers</Text>
                <Text>
                    Meetings Tuesdays at six:fifteen
                </Text>
            </ScrollView>
        </Layout>
    );
};

export { HomeScreen }
