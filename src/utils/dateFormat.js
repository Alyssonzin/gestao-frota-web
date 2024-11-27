import dayjs from "dayjs";

export const dateFormat = (dateString) => {
    console.log(dateString);
    if (dateString) {
        return dayjs(dateString,'yyyy-mm-dd').format('DD/MM/YYYY'); // Formata a data do banco para DD/MM/YYYY
    }
}