import React from 'react';
import { Text, Image } from 'react-native-ui-lib';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { Video, NavigationProps } from '../commonTypes';
import { VideoPlayer } from '../components/VideoPlayer';
import { Layout } from '../components/Layout';
import { VideosGroup } from '../components/VideosGroup';
import styled from 'styled-components/native';

const BackIcon = styled(Image)({
    width: 20,
    height: 20,
    margin: 16
});

type VideoScreenProps = {
    route: {
        params: {
            video: Video
        }
    }
} & NavigationProps;

const VideoScreen = (props: VideoScreenProps) => {
    const video = props.route.params.video;
    // const [video, setVideo] = React.useState<Video | null>(null);

    // React.useEffect(() => {
    //     const fetchVideos = async () => {
    //         let response;
    //         response = await getVideo(props.route.params.trackId);
    //         if (response && response.data && response.data.video)
    //             setVideo(response.data.video);
    //     };
    //     fetchVideos();
    // }, [props]);

    if (video === null || !video.semester) {
        return <Text>Loading...</Text>;
    }

    return (
        <Layout>
            <GestureHandlerRootView>
                <TouchableOpacity onPress={() => { props.navigation.goBack(); }}>
                    <BackIcon
                        source={require('../assets/icons/back.png')}
                    />
                </TouchableOpacity>
                <VideoPlayer
                    thumbnail={`https://ds1cu037r68vs.cloudfront.net/${video.semester}--${video.title}.png`}
                    source={video.src}
                />
                <Text text60 marginB-8>
                    {video.semester} - {video.title}
                </Text>
                <Text marginB-40>
                    {video.description}
                </Text>
                <Text text60 marginB-16>
                    More videos
                </Text>
                <VideosGroup detaultSemester={video.semester} navigation={props.navigation} />
            </GestureHandlerRootView>
        </Layout>
    );
};

export { VideoScreen };
