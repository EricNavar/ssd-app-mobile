export type Video = {
    _id: string;
    semester: string;
    video_number: number;
    description: string;
    title: string;
    src: string;
}

export enum Screens {
    VideoScreen = 'VideoScreen',
    AboutScreen = 'AboutScreen',
    VideoCatalogScreen = 'VideoCatalogScreen'
}

export type NavigationProps = {
    navigation: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        navigate: any;
        goBack: any;
    };
};

// should probably make a better solution so that this doesn't suddenly break in 2025
export enum Semester {
    "2018 Fall",
    "2019 Spring",
    "2019 Summer",
    "2019 Fall",
    "2020 Spring",
    "2020 Summer",
    "2020 Fall",
    "2021 Spring",
    "2021 Summer",
    "2021 Fall",
    "2022 Spring",
    "2022 Summer",
    "2022 Fall",
    "2023 Spring",
    "2023 Summer",
    "2023 Fall",
    "2024 Spring",
    "2024 Summer",
    "2024 Fall"
}
