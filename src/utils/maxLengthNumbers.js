export const maxLengthNumbers = (value, length) => {
    if (value) {
        return value.replace(/[^0-9]/g, '').slice(0, length); // Remove tudo que não for número e limita o tamanho
    }
}