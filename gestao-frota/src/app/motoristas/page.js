import Link from "next/link";
import Image from "next/image";
import { UsersRound, CarFront } from "lucide-react";
import Input from "@/components/created/Input";

export default function Motoristas() {
    return (
        <main className="flex h-screen bg-gray-200">
            <aside className="flex flex-col items-center min-h-screen min-w-20 shadow-inner bg-gray-400 pt-10">
                <nav className="sticky w-full">
                    <ul className="flex flex-col items-center">
                        <li className="w-full flex justify-center text-white hover:bg-gray-500 py-5">
                            <Link href="/motoristas" className="flex justify-center h-full w-full">
                                <UsersRound size={30} />
                            </Link>
                        </li>

                        <li className="w-full flex justify-center text-white hover:bg-gray-500 py-5">
                            <Link href="/veiculos" className="flex justify-center h-full w-full">
                                <CarFront size={35} />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            <section className="w-1/2 p-4 ml-8 space-y-6">
                <div className="w-3/4">
                    <Input id="pesquisa" type="text" placeholder="Pesquisar" />
                </div>

                <div className="space-y-4 bg-white h-[85%] overflow-y-scroll shadow-md rounded-xl p-2 pb-3">
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
                                Array.from({ length: 100 }).map((_, index) => (
                                    <tr key={index} className="border-t">
                                        <td>{index + 1}</td>
                                        <td>Guilherme Silveira Coelho</td>
                                        <td>999.999.999-99</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <div className="sticky bottom-2 text-end mr-4">
                        <Link href="/motoristas/novo" className="bg-green-500 hover:bg-green-600 transition duration-200 shadow-md rounded-md text-white p-2">Novo +</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}