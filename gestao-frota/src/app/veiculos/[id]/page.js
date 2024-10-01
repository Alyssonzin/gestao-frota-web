"use client"

import NavAdmin from "@/components/created/NavAdmin";
import Input from "@/components/created/Input";
import { useEffect, useState } from "react";
import Footer from "@/components/created/Footer";

export default function AtualizarVeiculo({ params }) {
    const { id } = params;

    const [veiculo, setVeiculo] = useState({
        modelo: 'Fusca',
        placa: 'miau123',
        renavam: '111111',
        cor: 'branco'
    });

    useEffect(() => {
        const getVeiculo = async () => {
            console.log('buscando veiculo pelo id...');

        }

        getVeiculo();
    }, [id]);

    //Atualiza o estado do veiculo conforme o usuário digita
    const handleChange = (event) => {
        const { name, value } = event.target;

        setVeiculo({
            ...veiculo,
            [name]: value
        });
    }

    //Envia o veiculo para o backend
    const handleEditVeiculo = async () => {
        console.log(veiculo);
    }


    return (
        <>
            <main className="flex h-screen bg-gray-200">
                <NavAdmin />
                <section className="flex flex-col items-center w-full p-4 ml-8 space-y-6">
                    <h1 className="text-3xl font-bold text-center">Editar veículo</h1>
                    <form className="flex flex-col space-y-4 justify-center items-center w-1/2">
                        <div className="w-1/2">
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="modelo"
                                id="modelo"
                                placeholder="Modelo"
                                value={veiculo.modelo}
                            />
                        </div>
                        <div className="w-1/2">
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="placa"
                                id="placa"
                                placeholder="Placa"
                                value={veiculo.placa || ''}
                            />
                        </div>
                        <div className="w-1/2">
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="renavam"
                                id="renavam"
                                placeholder="renavam"
                                value={veiculo.renavam || ''}
                            />
                        </div>
                        <div className="w-1/2">
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="cor"
                                id="cor"
                                placeholder="Cor"
                                value={veiculo.cor || ''}
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleEditVeiculo}
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