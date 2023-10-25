import React from 'react';
import { View, Text, Picker, Icon, Colors } from 'react-native-ui-lib';
import { VideoCard } from './VideoCard';
import { Video, NavigationProps } from '../commonTypes';
import { getVideosFromSemester } from '../util';

import dropdown from '../assets/icons/chevron-down.png';

const VideosGroup = (props: { detaultSemester: string } & NavigationProps) => {
    const [semester, setSemester] = React.useState<string>(props.detaultSemester);
    const [videos, setVideos] = React.useState<Video[]>([]);

    React.useEffect(() => {
        const fetchVideos = async () => {
            const response = await getVideosFromSemester(semester)
                .catch(e => {
                    console.log(e);
                });
            if (response && response.videos) {
                setVideos(response.videos);
            }
        };
        fetchVideos();
    }, [semester]);

    const handleChange = (item: string) => {
        if (item) {
            setSemester(item);
        }
    };

    const semesters = [
        'Fall 2020',
        'Fall 2021',
        'Spring 2022',
        'Fall 2022',
        'Spring 2023',
        'Fall 2023'
    ];

    if (semester) {
        return (
            <View>
                <Picker
                    placeholder="Select a semester"
                    value={semester}
                    onChange={handleChange}
                    useSafeArea
                    trailingAccessory={<Icon size={16} source={dropdown} tintColor={Colors.textColor} />}
                    fieldType={Picker.fieldTypes.filter}
                    useWheelPicker
                >
                    {semesters.map((semester) =>
                        <Picker.Item key={semester} value={semester} label={semester} />
                    )}
                </Picker>
                <View >
                    {videos.map((video, index) =>
                        <VideoCard video={video} key={index} navigation={props.navigation} />
                    )}
                    <View style={{ height: 60 }} />
                </View>
            </View>
        );
    }
    return <Text>Loading...</Text>;
};

export { VideosGroup };
