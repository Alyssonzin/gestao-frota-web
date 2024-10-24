"use client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react";
import { deleteDriver } from "@/api/routes";
import Link from "next/link";
export default function DriverTable({ data }) {
    const handleDelete = async (id) => {
        try {
            await deleteDriver(id);
            window.location.reload();
        } catch (error) {
            alert('Erro ao excluir motorista!');
        }
    }

    return (
        <table className="w-full">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>CPF</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {
                    //Se data não for vazio, cria uma linha pra cada item.
                    data ? data.map((item) => (
                        <tr key={item.id} className="border-t h-14">
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.cpf}</td>

                            <td className="space-x-4 w-1/4">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="text-white">
                                        <ChevronDown size={25} className="bg-slate-800 rounded-full shadow-md" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem className="hover:bg-blue-400 hover:text-white cursor-pointer">
                                                <Link href={`/driver/${item.id}`}>Editar</Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="hover:bg-red-600 hover:text-white cursor-pointer">
                                                <button onClick={() => handleDelete(item.id)}>Excluir</button>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </td>
                        </tr>
                    )) : <tr><td colSpan="3">Nenhum dado encontrado</td></tr>
                }
            </tbody>
        </table>
    );
}