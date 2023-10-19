import React from 'react';
import { Text, Image } from 'react-native-ui-lib';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
import { Video, NavigationProps } from '../commonTypes';
import { VideoPlayer } from '../components/VideoPlayer';
import { Layout } from '../components/Layout';
import { VideosGroup } from '../components/VideosGroup';
import { getVideo } from '../util';

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
        return <Text>Loading...</Text>
    }

    return (
        <Layout>
            <GestureHandlerRootView>
                <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                    <Image
                        style={{ width: 20, height: 20, margin: 16 }}
                        source={require('../assets/icons/back.png')}
                    />
                </TouchableOpacity>
                <VideoPlayer
                    thumbnail={`https://ds1cu037r68vs.cloudfront.net/${video.semester} - ${video.title}.png`}
                    source={video.src}
                />
                <Text style={{ fontSize: 20, marginBottom: 8 }}>
                    {video.semester} - {video.title}
                </Text>
                <Text style={{ marginBottom: 40 }}>
                    {video.description}
                </Text>
                <Text style={{ marginBottom: 16, fontSize: 20 }}>
                    More videos
                </Text>
                <VideosGroup detaultSemester={video.semester} navigation={props.navigation} />
            </GestureHandlerRootView>
        </Layout>
    );
}

export { VideoScreen };
