import React from 'react';
import { NavigationProps } from '../commonTypes';
import { Button, Text, Image, View, Carousel } from 'react-native-ui-lib';
import { ImageSourcePropType, Linking, ScrollView } from 'react-native';
import { Layout } from '../components/Layout';

type Officer = {
    name: string;
    position: string;
    image: ImageSourcePropType;
}

const officers: Officer[] = [
    {
        name: 'Yonas Bahre',
        position: 'President',
        image: require('../assets/images/yonas.png')
    },
    {
        name: 'Michael Hayworth',
        position: 'Vice President',
        image: require('../assets/images/michael.jpg')
    },
    {
        name: 'Stephen',
        position: 'stephen',
        image: require('../assets/images/stephen.jpg')
    },
    {
        name: 'Param Gupta',
        position: 'Program Officer',
        image: require('../assets/images/param.jpg')
    },
    {
        name: 'Angel',
        position: 'Outreach Officer',
        image: require('../assets/images/angel.png')
    },
    {
        name: 'CJ Weir',
        position: 'Involvement Officer',
        image: require('../assets/images/cj.png')
    }
]

const images = [
    {
        source: require('../assets/images/photo1.jpg'),
        aspectRatio: .75
    },
    {
        source: require('../assets/images/photo2.jpg'),
        aspectRatio: 1.333
    }
]

const AboutScreen = (props: NavigationProps) => {
    const onPressDiscord = () => {
        Linking.openURL('https://discord.gg/5SyB3yx');
    };
    return (
        <Layout style={{ paddingHorizontal: 20 }}>
            <Image
                style={{ width: 100, height: 100, marginBottom: 12 }}
                source={require('../assets/images/ssd.png')}
            />
            <Text text50 style={{ marginBottom: 20 }}>Susiety of Software Developers</Text>
            <Text style={{ marginBottom: 6 }}>
                - Meetings Tuesdays at six:fifteen
            </Text>
            <Text text60>What is SSD?</Text>
            <Text style={{ marginTop: 4, marginBottom: 20 }}>We are a cool club that does cool things</Text>
            <Text text70 style={{ marginBottom: 6 }}>
                - Become the coolest person in your dorm by being part of this amazing computer science club! 😎
            </Text>
            <Text text70 style={{ marginBottom: 6 }}>
                - Join our Discord! Our most up-to-date announcements and community discussion is hosted here.
            </Text>
            <Button
                label='Discord' onPress={onPressDiscord}
                style={{ width: 100, justifyContent: 'flex-start', marginBottom: 20 }}
            />
            <Carousel
                // autoplay
                // autoplayInterval={5000}
                containerStyle={{ height: 300 }}
                showCounter
            >
                {images.map((image, index) =>
                    <View style={{ alignContent: 'center', alignItems: 'center', width: '100%', height: 300 }} key={index}>
                        <Image source={image.source} style={{ maxHeight: 300, maxWidth: '100%', aspectRatio: image.aspectRatio, marginHorizontal: 'auto' }} />
                    </View>
                )}
            </Carousel>
            <Text text50 style={{ marginTop: 80 }}>
                Upcoming meetings
            </Text>
            <View style={{
                backgroundColor: 'lightblue',
                padding: 16,
                marginBottom: 12,
                borderRadius: 8,
                borderTopColor: 'white',
                borderBottomColor: 'gray',
                borderTopWidth: .5,
                borderBottomWidth: .5
            }}>
                <Text text70 style={{ marginBottom: 6 }}>
                    11/14: AMA with Joebama
                </Text>
            </View>
            <View style={{
                backgroundColor: 'lightblue',
                padding: 16,
                marginBottom: 12,
                borderRadius: 8,
                borderTopColor: 'white',
                borderBottomColor: 'gray',
                borderTopWidth: .5,
                borderBottomWidth: .5
            }}>
                <Text text70 style={{ marginBottom: 6 }}>
                    11/28: Raid Blake's apartment (he does not deserve ownership of things)
                </Text>
            </View>
            <Text text50 style={{ marginTop: 80 }}>Who is on the board of SSD?</Text>
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {officers.map((officer: Officer, index: number) =>
                    <View key={index} style={{ width: '50%', marginTop: 4, marginBottom: 12 }}>
                        <Image
                            style={{ width: '80%', height: 'auto', aspectRatio: 1, margin: 8, borderRadius: 200 }}
                            source={officer.image}
                        />
                        <Text text60 style={{ width: '100%', textAlign: 'center' }}>{officer.name}</Text>
                        <Text style={{ width: '100%', textAlign: 'center' }}>{officer.position}</Text>
                    </View>
                )}
            </View>
            <View style={{ height: 24 }} />
        </Layout>
    );
};

export { AboutScreen }
