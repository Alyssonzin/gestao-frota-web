"use client"

import NavAdmin from "@/components/created/NavAdmin";
import Input from "@/components/created/Input";
import Footer from "@/components/created/Footer";
import { useState } from "react";

export default function CadastrarVeiculo() {
    const [veiculo, setVeiculo] = useState({
        modelo: '',
        placa: '',
        renavam: '',
        cor: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setVeiculo({
            ...veiculo,
            [name]: value
        })
    }

    const handleCreateVeiculo = async () => {
        console.log(veiculo);
    }

    return (
        <>
            <main className="flex h-screen bg-gray-200">
                <NavAdmin />
                <section className="flex flex-col items-center w-full p-4 ml-8 space-y-6">
                    <h1 className="text-3xl font-bold text-center">Cadastro de veículos</h1>
                    <form className="flex flex-col space-y-4 justify-center items-center w-1/2">
                        <div className="w-1/2">
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="modelo"
                                id="modelo"
                                placeholder="Modelo"
                            />
                        </div>
                        <div className="w-1/2">
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="placa"
                                id="placa"
                                placeholder="Placa"
                            />
                        </div>
                        <div className="w-1/2">
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="renavam"
                                id="renavam"
                                placeholder="renavam"
                            />
                        </div>
                        <div className="w-1/2">
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="cor"
                                id="cor"
                                placeholder="Cor"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleCreateVeiculo}
                            className="bg-green-500 hover:bg-green-700 transition duration-200 font-bold text-center shadow-md text-white py-2 px-4 rounded w-1/2">
                            Salvar
                        </button>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}