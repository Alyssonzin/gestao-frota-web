import { api } from "./api";

export const login = async (form) => {
    return api.post('/user/login/web', form).then(res => {
        const { email } = res.data;
        document.cookie = `email=${email}; path=/; max-age=1800`;
    }).catch(error => {
        throw error;
    });
}