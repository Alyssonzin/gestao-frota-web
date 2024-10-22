"use client"

import Input from "./Input"
import Motorista from "@/utils/objects/Motorista";
import { cpfMask, dateMask, maxLengthNumbers, phoneMask } from "@/utils/Masks";
import { useState } from "react";

export default function DriverForm({ defaultValues = { Motorista }, onsubmit }) {
    const [motorista, setMotorista] = useState(defaultValues);

    const handleChange = (event) => {
        let { name, value } = event.target;

        setMotorista({
            ...motorista,
            cpf: name === 'cpf' ? value = cpfMask(value) : motorista.cpf,
            data_nasc: name === 'data_nasc' ? value = dateMask(value) : motorista.data_nasc,
            cnh: name === 'cnh' ? value = maxLengthNumbers(value, 11) : motorista.cnh,
            telefone: name === 'telefone' ? value = phoneMask(value) : motorista.telefone,
            [name]: value
        });

        event.target.value = value;
    }

    return (
        <div className="space-y-4">
            <form className="flex space-x-32 justify-center w-full">
                <div className="space-y-4">
                    <div className="w-full">
                        <span>CPF:</span>
                        <Input
                            type="text"
                            name="cpf"
                            id="cpf"
                            onChange={handleChange}
                            value={motorista.cpf || ''}
                        />
                    </div>
                    <div className="w-full">
                        <span>Nome:</span>
                        <Input
                            type="text"
                            name="nome"
                            id="nome"
                            onChange={handleChange}
                            value={motorista.nome || ''}
                        />
                    </div>
                    <div className="w-full">
                        <span>CNH:</span>
                        <Input
                            type="text"
                            name="cnh"
                            id="cnh"
                            onChange={handleChange}
                            value={motorista.cnh || ''}
                        />
                    </div>
                    <div className="w-full">
                        <span>Data de nascimento:</span>
                        <Input
                            type="text"
                            name="data_nasc"
                            id="data_nasc"
                            onChange={handleChange}
                            value={motorista.data_nasc || ''}
                        />
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="w-full">
                        <span>Telefone:</span>
                        <Input
                            type="text"
                            name="telefone"
                            id="telefone"
                            onChange={handleChange}
                            value={motorista.telefone || ''}
                        />
                    </div>
                    <div className="w-full">
                        <span>Logradouro:</span>
                        <Input
                            type="text"
                            name="logradouro"
                            id="logradouro"
                            onChange={handleChange}
                            value={motorista.logradouro || ''}
                        />
                    </div>
                    <div className="w-full">
                        <span>Bairro:</span>
                        <Input
                            type="text"
                            name="bairro"
                            id="bairro"
                            onChange={handleChange}
                            value={motorista.bairro || ''}
                        />
                    </div>
                    <div className="w-full">
                        <span>Cidade:</span>
                        <Input
                            type="text"
                            name="cidade"
                            id="cidade"
                            onChange={handleChange}
                            value={motorista.cidade || ''}
                        />
                    </div>
                </div>
            </form>
            <button
                type="button"
                onClick={onsubmit(motorista)}
                className="bg-green-500 hover:bg-green-700 transition duration-200 font-bold text-center shadow-md text-white py-2 px-4 rounded w-full">
                Salvar
            </button>
        </div>
    )
}