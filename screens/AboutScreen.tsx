import React from 'react';
import { Button, Text, Image, View, Carousel } from 'react-native-ui-lib';
import { ImageProps, Linking } from 'react-native';
import { Layout } from '../components/Layout';
import styled from 'styled-components/native';
import { officers, posts } from '../data';
import { Officer, PostProps } from '../commonTypes';
import { Post } from '../components/Post';

const images = [
    {
        source: require('../assets/images/photo3.jpg'),
        aspectRatio: 1.333
    },
    {
        source: require('../assets/images/photo2.jpg'),
        aspectRatio: 1.333
    },
    {
        source: require('../assets/images/photo1.jpg'),
        aspectRatio: .75
    }
];

const CarouselImage = styled(Image)<ImageProps & { aspectRatio: number }>((props) => ({
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
            <Text text50 marginT-80>
                Gallery
            </Text>
            <Carousel
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
                Posts
            </Text>
            <Carousel
                containerStyle={{ height: 400 }}
                showCounter
            >
                {posts.map((post: PostProps, index: number) =>
                    <CarouselImageWrapper key={index}>
                        <Post {...post} />
                    </CarouselImageWrapper>
                )}
            </Carousel>
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

export { AboutScreen };
