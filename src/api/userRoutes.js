import { api } from "./api";

export const login = async (form) => {
    return api.post('/user/login/web', form).then(res => {
        const { sessionTime, email } = res.data;
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('sessionTime', sessionTime);
    }).catch(error => {
        throw error;
    });
}