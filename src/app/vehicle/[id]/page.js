"use client"

import NavAdmin from "@/components/created/NavAdmin";
import Input from "@/components/created/Input";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/created/Footer";
import axios from "axios";

export default function AtualizarVeiculo({ params }) {
    const URL = 'http://localhost:3000/vehicle/';
    const { id } = params;
    const [veiculo, setVeiculo] = useState({});
    const router = useRouter();

    useEffect(() => {
        const getVeiculo = async () => {
            axios.get(URL + id).then((res) => {
                setVeiculo(res.data);
            }).catch((err) => {
                console.log(err);
            });
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
        axios.put(URL + id, veiculo).then((res) => {
            router.push('/vehicle');
        }).catch((err) => {
            console.log(err);
        });
    }


    return (
        <>
            <main className="flex h-screen bg-gray-200">
                <NavAdmin />
                <section className="flex flex-col items-center w-full p-4 ml-8 space-y-6">
                    <h1 className="text-3xl font-bold text-center">Editar veículo</h1>
                    <form className="flex flex-col space-y-4 justify-center items-center w-1/2">
                        <div className="w-1/2">
                            <span>Modelo:</span>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="modelo"
                                id="modelo"
                                value={veiculo.modelo}
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Ano:</span>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="placa"
                                id="placa"
                                value={veiculo.placa || ''}
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Renavam:</span>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="renavam"
                                id="renavam"
                                value={veiculo.renavam || ''}
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Cor:</span>
                            <Input
                                type="text"
                                onChange={handleChange}
                                name="cor"
                                id="cor"
                                value={veiculo.cor || ''}
                                autocomplete="off"
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