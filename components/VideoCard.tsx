
import React, { Suspense } from 'react';
import { Video, NavigationProps, Screens } from '../commonTypes';
import { Text, TouchableOpacity, View } from 'react-native-ui-lib';
import styled from 'styled-components/native';

const Thumbnail = styled.Image({
    width: 341,
    height: 192,
    borderRadius: 4
});

export const VideoCard = (props: { video: Video } & NavigationProps) => {
    const video = props.video;
    const onPress = () => {
        props.navigation.navigate(Screens.VideoScreen, {
            video: video
        });
    };

    return (
        <TouchableOpacity onPress={onPress} marginT-16>
            <Suspense fallback={<View/>}>
                <Thumbnail
                    source={{ uri: `https://ds1cu037r68vs.cloudfront.net/${video.semester}--${video.title}.png` }}
                />
            </Suspense>
            <Text text70 marginT-4>
                {video.title}
            </Text>
        </TouchableOpacity>
    );
};
