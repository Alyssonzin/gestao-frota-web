"use client";
import { useRouter, usePathname } from "next/navigation";

export default function Table({ headers, columns, data }) {
    const router = useRouter();
    const pathName = usePathname();
    
    const handleEdit = (id) => {
        router.push(`${pathName}/${id}`)
    }

    const handleDelete = (id) => {
        console.log(`Deletando ${id}`);
    }

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
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {
                    //Se data não for vazio, cria uma linha pra cada item.
                    data ? data.map((item) => (
                        <tr key={item.id} className="border-t h-14">
                            {
                                //Columns são as colunas deste item no banco de dados, diferente de headers.
                                columns.map((coluna) => (
                                    <td>{item[coluna]}</td>
                                ))
                            }
                            <td className="space-x-4 w-1/4">
                                <button onClick={() => { handleEdit(item.id) }} className="bg-blue-500 hover:bg-blue-600 transition duration-200 shadow-md rounded-md text-white select-none p-2">Editar</button>
                                <button onClick={() => { handleDelete(item.id) }} className="bg-red-500 hover:bg-red-600 transition duration-200 shadow-md rounded-md text-white select-none p-2">Excluir</button>
                            </td>
                        </tr>
                    )) : <tr><td colSpan={headers.length}>Nenhum dado encontrado</td></tr>
                }
            </tbody>
        </table>
    );
}