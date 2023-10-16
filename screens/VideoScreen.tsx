import React from 'react';
import { Text, Image } from 'react-native-ui-lib';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
import { Video, NavigationProps } from '../commonTypes';
import { VideoPlayer } from '../components/VideoPlayer';
import { Layout } from '../components/Layout';
import { VideosGroup } from '../components/VideosGroup';
import { getVideo } from '../util';

type VideoScreenProps = any & NavigationProps;

const VideoScreen = (props: VideoScreenProps) => {
    const [video, setVideo] = React.useState<Video | null>(null);

    React.useEffect(() => {
        const fetchVideos = async () => {
            let response;
            response = await getVideo(props.route.params.trackId);
            if (response && response.data && response.data.video)
                setVideo(response.data.video);
        };
        fetchVideos();
    }, [props]);

    if (video === null || !video.semester) {
        return <Text>Loading...</Text>
    }

    return (
        <Layout>
            <ScrollView>
                <GestureHandlerRootView>
                    <TouchableOpacity onPress={() => { props.navigation.goBack() }}>
                        <Image
                            style={{ width: 20, height: 20, margin: 16 }}
                            source={require('../assets/icons/back.png')}
                        />
                    </TouchableOpacity>
                    <VideoPlayer
                        thumbnail={`https://d34lypc6o619vf.cloudfront.net/${video.semester}.${video.video_number}.jpg`}
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
            </ScrollView>
        </Layout>
    );
}

export { VideoScreen };
