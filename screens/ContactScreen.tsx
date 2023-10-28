import React from 'react';
import { View, Text, Button } from 'react-native-ui-lib';
import { Layout } from '../components/Layout';
import { ImageSourcePropType, Linking } from 'react-native';

const ContactScreen = () => {
    const onPressSocial = (link: string) => {
        Linking.openURL(link);
    };

    const icons: Record<string, ImageSourcePropType > = {
        'Discord': require('../assets/icons/discord.png'),
        'Youtube': require('../assets/icons/youtube.png'),
        'Instagram': require('../assets/icons/instagram.png'),
        'LinkedIn': require('../assets/icons/linkedin.png'),
    };

    return (
        <Layout style={{paddingHorizontal: 20}}>
            <View>
                <View marginB-20 >
                    <Text text70>Shoot us an email and our President Yonas Bahre or the Ourtrach Officer Angel will reply: </Text>
                    <Button link label='ufssd.org@gmail.com' onPress={() => onPressSocial('ufssd.org@gmail.com')}/>
                </View>
                <Button
                    label='Discord'
                    onPress={() => onPressSocial('https://discord.gg/5SyB3yx')}
                    iconSource={icons.Discord}
                    iconStyle={{height:24,width:24}}
                    marginB-20
                />
                <Button
                    label='YouTube'
                    onPress={() => onPressSocial('https://www.youtube.com/@ufssd')}
                    iconSource={icons.Youtube}
                    iconStyle={{height:24,width:24}}
                    marginB-20
                />
                <Button
                    label='Instagram'
                    onPress={() => onPressSocial('https://www.instagram.com/uf.ssd/')}
                    iconSource={icons.Instagram}
                    iconStyle={{height:24,width:24}}
                    marginB-20
                />
                <Button
                    label='LinkedIn'
                    onPress={() => onPressSocial('https://www.linkedin.com/company/ssduf?trk=public_post_feed-actor-name')}
                    iconSource={icons.LinkedIn}
                    iconStyle={{height:24,width:24}}
                    marginB-20
                />
            </View>
        </Layout>
    );
};

export { ContactScreen };