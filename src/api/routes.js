import axios from "axios";
const API_URL = "https://api-gestao-frota.onrender.com"
const API_URL_LOCAL = "http://localhost:8080"

// Rotas do Driver
export const api = axios.create({
    baseURL: API_URL_LOCAL
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

// Rotas do Vehicle

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
    return api.post('/vehicle', data).then(res => {
        return res.data;
    }).catch(error => {
        throw error;
    })
}

export const updateVehicle = async (id, data) => {
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