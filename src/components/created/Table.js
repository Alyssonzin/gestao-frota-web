"use client";
import { useRouter, usePathname } from "next/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Table({ headers, columns, data }) {
    const router = useRouter();
    const pathName = usePathname();

    const handleEdit = (id) => {
        router.push(`${pathName}/${id}`);
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
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="text-white">
                                        <ChevronDown size={25} className="bg-slate-800 rounded-full shadow-md" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem
                                                onClick={() => handleEdit(item.id)}
                                                className="hover:bg-blue-400 hover:text-white cursor-pointer">
                                                Editar
                                            </DropdownMenuItem>
                                            <DropdownMenuItem
                                                onClick={() => handleDelete(item.id)}
                                                className="hover:bg-red-600 hover:text-white cursor-pointer">
                                                Excluir
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </td>
                        </tr>
                    )) : <tr><td colSpan={headers.length}>Nenhum dado encontrado</td></tr>
                }
            </tbody>
        </table>
    );
}