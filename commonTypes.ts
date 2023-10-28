import { ImageSourcePropType } from 'react-native';

export type Video = {
    _id: string;
    semester: string;
    video_number: number;
    description: string;
    title: string;
    src: string;
}

export enum Screens {
    VideoScreen = 'Videos',
    AboutScreen = 'About',
    VideoCatalogScreen = 'Video Catalog',
    EventsScreen = 'Events',
    EventDetailsScreen = 'Event Details',
}

export type NavigationProps = {
    navigation: {
        navigate: (key: string, params?: object, path?: string, merge?: boolean) => void
        // eslint-disable-next-line @typescript-eslint/ban-types
        goBack: Function;
    };
};

// should probably make a better solution so that this doesn't suddenly break in 2025
export enum Semester {
    '2018 Fall',
    '2019 Spring',
    '2019 Summer',
    '2019 Fall',
    '2020 Spring',
    '2020 Summer',
    '2020 Fall',
    '2021 Spring',
    '2021 Summer',
    '2021 Fall',
    '2022 Spring',
    '2022 Summer',
    '2022 Fall',
    '2023 Spring',
    '2023 Summer',
    '2023 Fall',
    '2024 Spring',
    '2024 Summer',
    '2024 Fall'
}

export type SSDEvent = {
    title: string;
    date: number;
    location: string;
    description: string;
}

export type Officer = {
    name: string;
    position: string;
    image: ImageSourcePropType;
}

export type PostProps = {
    title: string;
    link: string;
    body: string;
    image: ImageSourcePropType;
}
