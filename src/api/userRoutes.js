import { api } from "./api";

export const login = async (form) => {
    return api.post('/user/login/web', form).then(res => {
        return res.data;
    }).catch(error => {
        throw error;
    });
}