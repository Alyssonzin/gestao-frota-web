"use client"

import NavAdmin from "@/components/created/NavAdmin";
import Input from "@/components/created/Input";
import { useState } from "react";
import Footer from "@/components/created/Footer";

export default function CadastrarMotorista() {
    const [motorista, setMotorista] = useState({
        cpf: '',
        nome: '',
        telefone: '',
        endereco: {
            logradouro: '',
            bairro: ''
        }
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name.includes('.')) {
            const [key, subkey] = name.split('.');

            setMotorista({
                ...motorista,
                [key]: {
                    ...motorista[key],
                    [subkey]: value
                }
            })
            
        } else {
            setMotorista({
                ...motorista,
                [name]: value
            })
        }
    }

    const handleCreateMotorista = async () => {
        console.log(motorista);
    }


    return (
        <>
            <main className="flex h-screen bg-gray-200">
                <NavAdmin />

                <section className="flex flex-col items-center w-full p-4 ml-8 space-y-6">

                    <h1 className="text-3xl font-bold text-center">Cadastro de motoristas</h1>

                    <form className="flex flex-col space-y-4 justify-center items-center w-1/2">
                        <div className="w-1/2">
                            <Input
                                type="text"
                                name="cpf"
                                id="cpf"
                                placeholder="CPF"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2">
                            <Input
                                type="text"
                                name="nome"
                                id="nome"
                                placeholder="Nome"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2">
                            <Input
                                type="text"
                                name="telefone"
                                id="telefone"
                                placeholder="Telefone"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2">
                            <Input
                                type="text"
                                name="endereco.logradouro"
                                id="logradouro"
                                placeholder="Rua"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="w-1/2">
                            <Input
                                type="text"
                                name="endereco.bairro"
                                id="bairro"
                                placeholder="Bairro"
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            type="button"
                            onClick={handleCreateMotorista}
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