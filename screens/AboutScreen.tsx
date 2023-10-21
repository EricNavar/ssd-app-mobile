import React from 'react';
import { SSDEvent } from '../commonTypes';
import { Button, Text, Image, View, Carousel } from 'react-native-ui-lib';
import { ImageProps, ImageSourcePropType, Linking, ScrollView } from 'react-native';
import { Layout } from '../components/Layout';
import styled from 'styled-components/native';

type Officer = {
    name: string;
    position: string;
    image: ImageSourcePropType;
}

const Event = styled.View({
    backgroundColor: 'lightblue',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderTopColor: 'white',
    borderBottomColor: 'gray',
    borderTopWidth: .5,
    borderBottomWidth: .5
});

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

const events: SSDEvent[] = [
    {
        date: '11/14',
        title: 'AMA with Joebama'
    },
    {
        date: '11/28',
        title: 'Raid Blake\'s apartment (he does not deserve ownership of things)'
    }
]

const CarouselImage = styled.Image<ImageProps & { aspectRatio: number }>((props) => ({
    maxHeight: 300,
    maxWidth: '100%',
    aspectRatio: props.aspectRatio,
    marginHorizontal: 'auto'
}));

const OfficerProfilePic = styled.Image({
    width: '80%',
    height: 'auto',
    aspectRatio: 1,
    margin: 8,
    borderRadius: 200
});

const OfficerContainer = styled.View({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
});

const OfficerWrapper = styled.View({
    width: '50%',
    marginTop: 4,
    marginBottom: 12
});

const DiscordButton = styled(Button)({
    width: 100,
    justifyContent: 'flex-start',
    marginBottom: 20
});

const CarouselImageWrapper = styled(View)({
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 300
});

const AboutScreen = () => {
    const onPressDiscord = () => {
        Linking.openURL('https://discord.gg/5SyB3yx');
    };
    return (
        <Layout style={{ paddingHorizontal: 20 }}>
            <Image
                style={{ width: 100, height: 100 }}
                source={require('../assets/images/ssd.png')}
                marginB-12
            />
            <Text text50 marginB-20>Susiety of Software Developers</Text>
            <Text marginB-6>
                - Meetings Tuesdays at six:fifteen
            </Text>
            <Text text60>What is SSD?</Text>
            <Text marginT-4 marginB-20>We are a cool club that does cool things</Text>
            <Text text70 marginB-6>
                - Become the coolest person in your dorm by being part of this amazing computer science club! 😎
            </Text>
            <Text text70 marginB-6>
                - Join our Discord! Our most up-to-date announcements and community discussion is hosted here.
            </Text>
            <DiscordButton
                label='Discord' onPress={onPressDiscord}
            />
            <Carousel
                // autoplay
                // autoplayInterval={5000}
                containerStyle={{ height: 300 }}
                showCounter
            >
                {images.map((image, index) =>
                    <CarouselImageWrapper key={index}>
                        <CarouselImage source={image.source} aspectRatio={image.aspectRatio} />
                    </CarouselImageWrapper>
                )}
            </Carousel>
            <Text text50 marginT-80>
                Upcoming meetings
            </Text>
            <>
                {events.map((event: SSDEvent, index: number) => (
                    <Event key={index}>
                        <Text text70>
                            {event.date}: {event.title}
                        </Text>
                    </Event>
                ))}
            </>
            <Text text50 marginT-80>Who is on the board of SSD?</Text>
            <OfficerContainer>
                {officers.map((officer: Officer, index: number) =>
                    <OfficerWrapper key={index}>
                        <OfficerProfilePic
                            source={officer.image}
                        />
                        <Text center text60 style={{ width: '100%' }}>{officer.name}</Text>
                        <Text center style={{ width: '100%' }}>{officer.position}</Text>
                    </OfficerWrapper>
                )}
            </OfficerContainer>
            <View style={{ height: 24 }} />
        </Layout>
    );
};

export { AboutScreen }
