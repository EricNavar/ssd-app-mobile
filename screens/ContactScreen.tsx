import React from 'react';
import { View, Text, Button, Assets } from 'react-native-ui-lib';
import { Layout } from '../components/Layout';
import { ImageSourcePropType, Linking } from 'react-native';

const ContactScreen = () => {
    const onPressSocial = (link: string) => {
        Linking.openURL(link);
    };

    const icons: Record<string, ImageSourcePropType > = {
        "Discord": require('../assets/icons/discord.png'),
        "Youtube": require('../assets/icons/youtube.png'),
        "Instagram": require('../assets/icons/instagram.png'),
    }

    return (
        <Layout>
            <View>
                <View style={{display:'flex', flexDirection:'row', marginBottom: 20}}>
                    <Text text70>Email: </Text>
                    <Button link label='ufssd.org@gmail.com' onPress={() => onPressSocial('ufssd.org@gmail.com')}/>
                </View>
                <Button
                    label='Discord'
                    onPress={() => onPressSocial('https://discord.gg/5SyB3yx')}
                    iconSource={icons.Discord}
                    marginB-20
                />
                <Button
                    label='YouTube'
                    onPress={() => onPressSocial('https://www.youtube.com/@ufssd')}
                    iconSource={icons.Youtube}
                    marginB-20
                />
                <Button
                    label='Instagram'
                    onPress={() => onPressSocial('https://www.instagram.com/uf.ssd/')}
                    iconSource={icons.Instagram}
                    marginB-20
                />
            </View>
        </Layout>
    )
};

export { ContactScreen };