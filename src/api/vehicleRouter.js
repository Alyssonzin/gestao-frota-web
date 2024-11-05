import { api } from "./api";
export const getVehicles = async () => {
    return api.get('/vehicle').then(res => {
        return res.data;
    }).catch(error => {
        throw error;
    });
}

export const getVehicleById = async (id) => {
    return api.get(`/vehicle/${id}`).then(res => {
        return res.data;
    }).catch(error => {
        throw error;
    })
}

export const createVehicle = async (data) => {
    data.ano = parseInt(data.ano);
    return api.post('/vehicle', data).then(res => {
        return res.data;
    }).catch(error => {
        throw error;
    })
}

export const updateVehicle = async (id, data) => {
    data.ano = parseInt(data.ano);
    return api.put(`/vehicle/${id}`, data).then(res => {
        return res.data;
    }).catch(error => {
        throw error;
    })
}

export const deleteVehicle = async (id) => {
    return api.delete(`/vehicle/${id}`).then(res => {
        return res.data;
    }).catch(error => {
        throw error;
    })
}