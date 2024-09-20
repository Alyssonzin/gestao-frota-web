export default function Table({ headers, columns, data }) {
    return (
        <table className="w-full">
            <thead>
                <tr>
                    {
                        //cria o cabeçalho da tabela com base no array de headers
                        headers.map((header) => (
                            <th>{header}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className="text-center">
                {
                    //Se data não for vazio, cria uma linha pra cada item.
                    data ? data.map((item) => (
                        <tr className="border-t">
                            {
                                //Columns são as colunas deste item no banco de dados, diferente de headers.
                                columns.map((coluna) => (
                                    <td>{item[coluna]}</td>
                                ))
                            }
                        </tr>
                    )) : <tr><td colSpan={headers.length}>Nenhum dado encontrado</td></tr>
                }
            </tbody>
        </table>
    );
}