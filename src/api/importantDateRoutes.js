import { api } from "./api";

export const createImportantDate = async (data) => {
    return api.post('/dates', data).then(res => {
        return res.data;
    }).catch(error => {
        throw error;
    })
}