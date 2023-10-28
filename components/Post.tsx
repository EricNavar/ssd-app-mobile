import React from 'react';
import { ImageProps, View, Image, Text, Button } from 'react-native-ui-lib';
import styled from 'styled-components/native';
import { PostProps } from '../commonTypes';
import { Linking } from 'react-native';

const ImageWrapper = styled(View)({
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 300
});

const PostImage = styled(Image)<ImageProps & { aspectRatio: number }>((props) => ({
    maxHeight: 300,
    maxWidth: '100%',
    aspectRatio: props.aspectRatio,
    marginHorizontal: 'auto'
}));

export const Post = (props: PostProps) => {
    const onPressLink = (url: string) => {
        Linking.openURL(url);
    };
    return (
        <View style={{maxWidth:'100%'}}>
            <ImageWrapper>
                <PostImage source={props.image} style={{maxHeight:300, width: '100%', maxWidth:500, aspectRatio: 1.33}}/>
            </ImageWrapper>
            <Text text60>{props.title}</Text>
            <Text text70>{props.body}</Text>
            <Button link text70 onPress={()=>{onPressLink(props.link);}} label='Link'/>
        </View>
    );
};
