import dayjs from "dayjs";

export const dateFormat = (dateString) => {
    if (dateString) {
        return dayjs(dateString).format('DD/MM/YYYY'); // Formata a data do banco para DD/MM/YYYY
    }
}