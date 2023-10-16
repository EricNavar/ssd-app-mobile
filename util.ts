import axios from "axios";

export const getVideosFromSemester = async (semester: string) => {
    const url = `https://kgocaqxtm3.execute-api.us-east-1.amazonaws.com/api/v1/tracks/season/${semester}`;
    return axios.get(url, {headers:{'Access-Control-Allow-Origin': '*'}})
        .then(function (response: any) {
            if (response && response.data)
                return response.data;
        })
        .catch(function (error: any) {
            console.log(error);
            console.log(error.response.data);
        })
        .finally(function () {
            // always executed
        });
};

export const getVideo = async (videoId: string) => {
    const url = `https://kgocaqxtm3.execute-api.us-east-1.amazonaws.com/api/v1/tracks/${videoId}`;
    return axios.get(url, {headers:{'Access-Control-Allow-Origin': '*'}})
        .then(function (response: any) {
            if (response)
                return response;
        })
        .catch(function (error: any) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
};

