import React from 'react';
import { Text, Image, View } from 'react-native-ui-lib';
import { Layout } from '../components/Layout';
import { Button, TouchableOpacity } from 'react-native-ui-lib';
import { NavigationProps } from '../commonTypes';
import { ImageSourcePropType, Linking, ScrollView } from 'react-native'

type Officer = {
    name: string;
    position: string;
    image: ImageSourcePropType;
}

const AboutScreen = (props: NavigationProps) => {
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
    return (
        <Layout style={{ margin: 20 }}>
            <ScrollView>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                    <Image
                        style={{ width: 50, height: 50, margin: 16 }}
                        source={require('../assets/icons/back.png')}
                    />
                </TouchableOpacity>
                <Text text60>What is SSD?</Text>
                <Text style={{ marginTop: 4, marginBottom: 20 }}>We are a cool club that does cool things</Text>
                <Text text60>Who is on the board of SSD?</Text>
                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {officers.map((officer: Officer, index: number) =>
                        <View key={index} style={{ width: '50%', borderWidth:1, marginTop: 4, marginBottom: 12 }}>
                            <Image
                                style={{ width: '80%', height: 'auto', aspectRatio: 1, margin: 8, borderRadius: '100%'}}
                                source={officer.image}
                            />
                            <Text text60 style={{width:'100%', textAlign:'center'}}>{officer.name}</Text>
                            <Text style={{width:'100%', textAlign:'center'}}>{officer.position}</Text>
                        </View>
                    )}
                </View>
                <View style={{height:24}} />
            </ScrollView>
        </Layout>
    );
}

export { AboutScreen };
