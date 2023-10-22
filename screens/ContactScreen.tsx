import React from 'react';
import { View, Text, Button } from 'react-native-ui-lib';
import { Layout } from '../components/Layout';

const ContactScreen = () => {
    const onPressSocial = (link: string) => {
        console.log();
    };

    return (
        <Layout>
            <View>
                <Text>ufssd.org@gmail.com</Text>
                <Button label='Discord' onPress={() => onPressSocial('')} />
                <Button label='YouTube' onPress={() => onPressSocial('')} />
                <Button label='Instagram' onPress={() => onPressSocial('')} />
            </View>
        </Layout>
    )
};

export { ContactScreen };