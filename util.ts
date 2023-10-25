import axios, { AxiosResponse } from 'axios';

export const getVideosFromSemester = async (semester: string) => {
    const url = `https://kgocaqxtm3.execute-api.us-east-1.amazonaws.com/api/v1/tracks/season/${semester}`;
    return axios.get(url, {headers:{'Access-Control-Allow-Origin': '*'}})
        .then((response: AxiosResponse) => {
            if (response && response.data)
                return response.data;
        })
        .catch((error) => {
            console.log(error);
            console.log(error.response.data);
        });
};

export const getVideo = async (videoId: string) => {
    const url = `https://kgocaqxtm3.execute-api.us-east-1.amazonaws.com/api/v1/tracks/${videoId}`;
    return axios.get(url, {headers:{'Access-Control-Allow-Origin': '*'}})
        .then((response: AxiosResponse) => {
            if (response)
                return response;
        })
        .catch((error) => {
            console.log(error);
        });
};

