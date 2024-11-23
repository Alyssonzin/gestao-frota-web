import { cpfMask, dateMask, phoneMask } from "@/utils/Masks";
import { api } from "./api";
import { dateFormat } from "../utils/dateFormat";

export const getDrivers = async () => {
    return api.get('/driver').then(res => {
        const drivers = res.data;
        drivers.forEach(driver => {
            driver.user.cpf = cpfMask(driver.user.cpf); //Formata o CPF
        });
        return drivers;
    }).catch(error => {
        throw error;
    });
}

export const getPendingDrivers = async () => {
    return api.get('/driver/pending').then(res => {
        const drivers = res.data;
        drivers.map(driver => {
            driver.user.cpf = cpfMask(driver.user.cpf); //Formata o CPF
            driver.user.phone = phoneMask(driver.user.phone); //Formata o telefone
            driver.user.birthdate = dateFormat(driver.user.birthdate) //Formata a data de nascimento
        });
        return drivers;
    }).catch(error => {
        throw error;
    });
}

export const getDriverById = async (id) => {
    return api.get(`/driver/${id}`).then(res => {
        const driver = res.data;
        driver.user.cpf = cpfMask(driver.user.cpf); //Formata o CPF
        driver.user.phone = phoneMask(driver.user.phone); //Formata o telefone
        driver.user.birthdate = dateFormat(driver.user.birthdate) //Formata a data de nascimento
        return driver;
    }).catch(error => {
        throw error;
    })
}

export const approveDriver = async (id) => {
    return api.put(`/driver/${id}/approve`).then(res => {
        return res.data;
    }).catch(error => {
        throw error;
    })
}

export const disapproveDriver = async (data) => {
    return api.post(`/declineMessage`, data).then(res => {
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

export const disableDriver = async (id) => {
    return api.put(`/driver/disable/${id}`).then(res => {
        return res.data;
    }).catch(error => {
        throw error;
    })
}

export const searchDriver = async (search) => {
    return api.get(`/driver/search/${search}`).then(res => {
        const drivers = res.data;
        drivers.forEach(driver => {
            driver.user.cpf = cpfMask(driver.user.cpf); //Formata o CPF
            driver.user.phone = phoneMask(driver.user.phone); //Formata o telefone
            driver.user.birthdate = dateFormat(driver.user.birthdate) //Formata a data de nascimento
        });
        return drivers;
    }).catch(error => {
        throw error;
    });
}