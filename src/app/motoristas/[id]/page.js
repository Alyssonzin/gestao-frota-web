"use client"

import NavAdmin from "@/components/created/NavAdmin";
import Input from "@/components/created/Input";
import { useEffect, useState } from "react";
import Footer from "@/components/created/Footer";
import axios from "axios";

export default function AtualizarMotorista({ params }) {
    const URL = 'http://localhost:3000/driver/';
    const { id } = params;

    const [motorista, setMotorista] = useState({});

    useEffect(() => {
        const getMotorista = async () => {
            axios.get(URL + id).then((res) => {
                setMotorista(res.data);
            }).catch((err) => {
                console.log(err);
            });
        }
        getMotorista();
    }, [id]);

    //Atualiza o estado do motorista conforme o usuário digita
    const handleChange = (event) => {
        const { name, value } = event.target;
        setMotorista({
            ...motorista,
            [name]: value
        });
    }

    //Envia o motorista para o backend
    const handleEditaMotorista = async () => {
        axios.put(URL + id, motorista).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <>
            <main className="flex h-screen bg-gray-200">
                <NavAdmin />

                <section className="flex flex-col items-center w-full p-4 ml-8 space-y-6">

                    <h1 className="text-3xl font-bold text-center">Editar motorista</h1>

                    <form className="flex flex-col space-y-4 justify-center items-center w-1/2">
                        <div className="w-1/2">
                            <span>Nome:</span>
                            <Input
                                type="text"
                                name="nome"
                                id="nome"
                                onChange={handleChange}
                                value={motorista.nome || ''}
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>CPF:</span>
                            <Input
                                type="text"
                                name="cpf"
                                id="cpf"
                                onChange={handleChange}
                                value={motorista.cpf || ''}
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Número da CNH:</span>
                            <Input
                                type="text"
                                name="cnh"
                                id="cnh"
                                onChange={handleChange}
                                value={motorista.cnh || ''}
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Telefone:</span>
                            <Input
                                type="text"
                                name="telefone"
                                id="telefone"
                                onChange={handleChange}
                                value={motorista.telefone || ''}
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Logradouro:</span>
                            <Input
                                type="text"
                                name="logradouro"
                                id="logradouro"
                                onChange={handleChange}
                                value={motorista.logradouro || ''}
                                autocomplete="off"
                            />
                        </div>
                        <div className="w-1/2">
                            <span>Bairro:</span>
                            <Input
                                type="text"
                                name="bairro"
                                id="bairro"
                                onChange={handleChange}
                                value={motorista.bairro || ''}
                                autocomplete="off"
                            />
                        </div>

                        <button
                            type="button"
                            onClick={handleEditaMotorista}
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