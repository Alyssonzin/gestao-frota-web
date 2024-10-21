export const cpfMask = (cpf) => {
    return cpf
        .replace(/\D/g, '') // Remove caracteres não numéricos
        .replace(/(\d{3})(\d)/, '$1.$2') // Aplica o primeiro ponto
        .replace(/(\d{3})(\d)/, '$1.$2') // Aplica o segundo ponto
        .replace(/(\d{3})(\d{1,2})/, '$1-$2') // Aplica o traço
        .replace(/(-\d{2})\d+?$/, '$1'); // Remove o que excede 11 caracteres
};
