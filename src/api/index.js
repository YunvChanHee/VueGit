import axios from "axios";

// 1. HTTp Request & Response와 관련된 기본 설정
const config = {
    baseUrl: "https://api.hnpwa.com/v0/"
};

// const config = axios.create({
//     baseURL: 'https://api.hnpwa.com/v0/'
// });


// 2. AOU 함수들을 정리
function fetchNewsList() {
    // return axios.get(config.baseUrl + '/news/1.json')
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchASKSList() {
    // return axios.get(config.baseUrl + 'ask/1.json')
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJOBSList() {
    // return axios.get(config.baseUrl + '/news/1.json')
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(username) {
    return axios.get(`${config.baseUrl}item/${username}.json`);
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`);
}


export {
    fetchNewsList,
    fetchASKSList,
    fetchJOBSList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList,
};