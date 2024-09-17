import Link from "next/link";
import Image from "next/image";
import { UsersRound, CarFront } from "lucide-react";
import Input from "@/components/created/Input";

export default function Motoristas() {
    return (
        <main className="flex bg-gray-200">
            <aside className="flex flex-col items-center min-h-screen min-w-20 shadow-inner bg-gray-400 p-5 pt-10">
                <nav className="fixed">
                    <ul className="flex flex-col items-center space-y-8">
                        <li className="text-white">
                            <Link href="/motoristas">
                                <UsersRound size={30} />
                            </Link>
                        </li>

                        <li className="text-white">
                            <Link href="/veiculos">
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

                <div className="space-y-4 bg-white max-h-96 overflow-y-scroll shadow-md rounded-xl p-2 pb-3">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>CPF</th>
                            </tr>
                        </thead>
                        <tbody className="text-center space-y-16">
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
                        <Link href="/motoristas/novo" className="bg-green-500 hover:bg-green-600 transition duration-200 rounded-md text-white p-2">Novo +</Link>
                    </div>
                </div>

            </section>
        </main>
    );
}