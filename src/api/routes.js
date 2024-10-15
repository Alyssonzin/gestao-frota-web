import axios from "axios";
const API_URL = "https://api-gestao-frota.onrender.com"

export const api = axios.create({
    baseURL: API_URL
});

export const getDrivers = async () => {
    return api.get('/driver').then(res => {
        return res.data;
    }).catch(error => {
        throw error;
    });
}

export const getDriverById = async (id) => {
    return api.get(`/driver/${id}`).then(res => {
        return res.data;
    }).catch(error => {
        throw error;
    })
}

export const createDriver = async (data) => {
    return api.post('/driver', data).then(res => {
        return res.data;
    }).catch(error => {
        throw error;
    })
}

export const updateDriver = async (id, data) => {
    return api.put(`/driver/${id}`, data).then(res => {
        return res.data;
    }).catch(error => {
        throw error;
    })
}

export const deleteDriver = async (id) => {
    return api.delete(`/driver/${id}`).then(res => {
        return res.data;
    }).catch(error => {
        throw error;
    })
}