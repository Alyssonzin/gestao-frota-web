"use client";
import Link from "next/link";
import Input from "@/components/created/Input";
import NavAdmin from "@/components/created/NavAdmin";
import Table from "@/components/created/Table";
import Footer from "@/components/created/Footer";
import { useState } from "react";

export default function Motoristas() {
    const [pesquisa, setPesquisa] = useState('');
    const motoristas = [
        { id: 1, nome: 'João Paulo Formentin Elias Pavannati', cpf: '123.456.789-00' },
        { id: 2, nome: 'Maria', cpf: '987.654.321-00' },
        { id: 3, nome: 'José', cpf: '456.789.123-00' },
        { id: 4, nome: 'Ana', cpf: '654.321.987-00' },
        { id: 5, nome: 'Pedro', cpf: '789.123.456-00' },
    ];
    const colunas = ['id', 'nome', 'cpf'];
    const headers = ['#', 'Nome', 'CPF'];

    const handleChange = (event) => {
        const { value } = event.target;
        setPesquisa(value);
    }

    //Busca ao pressionar ENTER
    const handleSearch = (event) => {
        const { key } = event;
        if (key === 'Enter'){
            console.log(pesquisa);
        }
    }

    return (
        <>
            <main className="flex h-screen bg-gray-200">
                <NavAdmin />

                <section className="w-full p-4 ml-8 space-y-6">
                    <div className="flex justify-between gap-6">
                        <div className="w-[90%]">
                            <Input
                                onChange={handleChange}
                                onKeyDown={handleSearch}
                                name="pesquisa"
                                id="pesquisa"
                                type="text"
                                placeholder="Pesquisar"
                                autocomplete="off"
                            />
                        </div>
                        <Link href="/motoristas/novo" className="bg-green-500 hover:bg-green-600 transition duration-200 shadow-md rounded-md select-none text-white p-2">Novo +</Link>
                    </div>

                    <div className="flex flex-col space-y-4 bg-white h-[85%] overflow-y-scroll shadow-md rounded-xl p-2 pb-3">
                        <Table headers={headers} data={motoristas} columns={colunas} />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}