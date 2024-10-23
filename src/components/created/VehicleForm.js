"use client"
import Input from "./Input"
import { useEffect, useState } from "react";
import Veiculo from "@/utils/objects/Veiculo";
import { maxLengthNumbers } from "@/utils/Masks";

export default function VehicleForm({ initialValues = Veiculo, onSubmit }) {
    const [veiculo, setVeiculo] = useState(initialValues);

    useEffect(() => {
        setVeiculo(initialValues);
    }, [initialValues]);

    const handleChange = (event) => {
        let { name, value } = event.target;

        setVeiculo({
            ...veiculo,
            ano: name === 'ano' ? parseInt(value) : veiculo.ano,
            renavam: name === 'renavam' ? value = maxLengthNumbers(value, 11) : veiculo.renavam,
            [name]: value
        })

        event.target.value = value;
    }

    return (
        <form className="flex flex-col space-y-4 justify-center items-center w-1/2">
            <div className="w-1/2">
                <span>Modelo:</span>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="modelo"
                    id="modelo"
                    value={veiculo.modelo}
                />
            </div>
            <div className="w-1/2">
                <span>Ano:</span>
                <Input
                    type="number"
                    onChange={handleChange}
                    name="ano"
                    id="ano"
                    value={veiculo.ano}
                />
            </div>
            <div className="w-1/2">
                <span>Placa:</span>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="placa"
                    id="placa"
                    value={veiculo.placa}
                />
            </div>
            <div className="w-1/2">
                <span>Renavam:</span>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="renavam"
                    id="renavam"
                    value={veiculo.renavam}
                />
            </div>
            <div className="w-1/2">
                <span>Cor:</span>
                <Input
                    type="text"
                    onChange={handleChange}
                    name="cor"
                    id="cor"
                    value={veiculo.cor}
                />
            </div>
            <button
                type="button"
                onClick={() => onSubmit(veiculo)}
                className="bg-green-500 hover:bg-green-700 transition duration-200 font-bold text-center shadow-md text-white py-2 px-4 rounded w-1/2">
                Salvar
            </button>
        </form>
    )
}