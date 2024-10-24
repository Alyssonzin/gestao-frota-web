"use client";
import Link from "next/link";
import Input from "@/components/created/Input";
import NavAdmin from "@/components/created/NavAdmin";
import Table from "@/components/created/Table";
import Footer from "@/components/created/Footer";
import { useState, useEffect } from "react";
import { getDrivers } from "@/api/routes";

export default function Motoristas() {
    const [pesquisa, setPesquisa] = useState('');
    const [motoristas, setMotoristas] = useState();
    const colunas = ['id', 'nome', 'cpf'];
    const headers = ['#', 'Nome', 'CPF'];

    useEffect(() => {
        const getMotoristas = async () => {
            try {
                const data = await getDrivers();
                setMotoristas(data);
            } catch (error) {
                setMotoristas();
            }
        }
        getMotoristas();
    }, []);

    const handleChange = (event) => {
        const { value } = event.target;
        setPesquisa(value);
    }

    //Busca ao pressionar ENTER
    const handleSearch = (event) => {
        const { key } = event;
        if (key === 'Enter') {
            console.log(pesquisa);
        }
    }

    return (
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
                    <Link href="/driver/novo" className="bg-green-500 hover:bg-green-600 transition duration-200 shadow-md rounded-md select-none text-white p-2">Novo +</Link>
                </div>

                <div className="flex flex-col space-y-4 bg-white h-[85%] overflow-y-scroll shadow-md rounded-xl p-2 pb-3">
                    <Table headers={headers} data={motoristas} columns={colunas} />
                </div>
            </section>
        </main>
    );
}