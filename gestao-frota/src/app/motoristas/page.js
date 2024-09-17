import Link from "next/link";
import Image from "next/image";
import { UsersRound, CarFront } from "lucide-react";
import Input from "@/components/created/Input";

export default function Motoristas() {
    return (
        <main className="flex">
            <aside className="flex flex-col items-center h-screen w-1/12 shadow-inner bg-gray-400 p-2 pt-10">
                <nav>
                    <ul className="flex flex-col items-center space-y-8">
                        <li className="text-white">
                            <Link href="/motoristas">
                                <UsersRound size={35} />
                            </Link>
                        </li>

                        <li className="text-white">
                            <Link href="/veiculos">
                                <CarFront size={40} />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            <section className="h-screen bg-gray-200 w-full p-4 space-y-6">
                <div className="w-1/3">
                    <Input id="nome" type="text" placeholder="Pesquisar" />
                </div>

                <table className="space-y-4 w-1/2 bg-white">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>10</td>
                            <td>Alysson Pereira dos Santos</td>
                            <td>000.000.000-00</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>Alysson Pereira dos Santos</td>
                            <td>000.000.000-00</td>
                        </tr>
                    </tbody>
                </table>

            </section>
        </main>
    );
}