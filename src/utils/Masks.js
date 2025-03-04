export const cpfMask = (cpf) => {
    return cpf
        .replace(/\D/g, '') // Remove caracteres não numéricos
        .replace(/(\d{3})(\d)/, '$1.$2') // Aplica o primeiro ponto
        .replace(/(\d{3})(\d)/, '$1.$2') // Aplica o segundo ponto
        .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Aplica o traço
        .replace(/(-\d{2})\d+?$/, '$1'); // Remove o que excede 11 caracteres
}

export const dateMask = (dateString) => {
    return dateString.replace(/\D/g, '') // Remove caracteres não numéricos
        .replace(/(\d{2})(\d)/, '$1/$2') // Aplica a primeira barra
        .replace(/(\d{2})(\d)/, '$1/$2') // Aplica a segunda barra
        .replace(/(\d{4})\d+?$/, '$1'); // Remove o que excede 10 caracteres
}

export const phoneMask = (phone) => {
    return phone.replace(/\D/g, '') // Remove caracteres não numéricos
        .replace(/(\d{2})(\d)/, '($1) $2') // Aplica o DDD
        .replace(/(\d{5})(\d)/, '$1-$2') // Aplica o traço
        .replace(/(-\d{4})\d+?$/, '$1'); // Remove o que excede 11 caracteres
}

export const maxLengthNumbers = (value, maxLength) => {
    // Remove tudo que não for número e limita o tamanho da string para maxLength
    return value.replace(/\D/g, '').slice(0, maxLength);
}