import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export const dateMask = (dateString) => {
    return dateString.replace(/\D/g, '') // Remove caracteres não numéricos
        .replace(/(\d{2})(\d)/, '$1/$2') // Aplica a primeira barra
        .replace(/(\d{2})(\d)/, '$1/$2') // Aplica a segunda barra
        .replace(/(\d{4})\d+?$/, '$1'); // Remove o que excede 10 caracteres
}