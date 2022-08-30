import { AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "../interceptor/axios-interceptor";

const get = (url: string, model?: AxiosRequestConfig) => {
    return axios
        .get(url, model)
        .then(handleResponse)
        .catch(handleError);
};

const post = (url: string, model?: AxiosRequestConfig) => {
    return axios
        .post(url, model)
        .then(handleResponse)
        .catch(handleError);
};

const put = (url: string, model?: AxiosRequestConfig) => {
    return axios
        .put(url, model)
        .then(handleResponse)
        .catch(handleError);
};

const patch = (url: string, model?: AxiosRequestConfig) => {
    return axios
        .patch(url, model)
        .then(handleResponse)
        .catch(handleError);
};

const remove = (url: string) => {
    return axios
        .delete(url)
        .then(handleResponse)
        .catch(handleError);
};


function handleResponse(response: AxiosResponse | any) {
    if (response.results) { return response.results; }
    if (response.data) { return response.data; }
    return response;
}

function handleError(error: any) {
    if (error.data) { return error.data; }
    return error;
}

export const wrapper = { get, post, put, patch, remove };