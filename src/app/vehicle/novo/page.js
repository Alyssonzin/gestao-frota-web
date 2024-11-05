"use client"

import NavAdmin from "@/components/created/NavAdmin";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createVehicle } from "@/api/vehicleRouter";
import Veiculo from "@/utils/objects/Veiculo";
import VehicleForm from "@/components/created/vehicle/VehicleForm";

export default function CadastrarVeiculo() {
    const [veiculo, setVeiculo] = useState(Veiculo);

    const router = useRouter();

    const handleCreateVeiculo = async (data) => {
        console.log(data);

        try {
            await createVehicle(data);
            router.push('/vehicle');
        } catch (error) {
            console.log(error);

            alert('Erro ao cadastrar veículo');
        }
    }

    return (
        <main className="flex h-screen bg-gray-200">
            <NavAdmin />
            <section className="flex flex-col items-center w-full p-4 ml-8 space-y-6">
                <h1 className="text-3xl font-bold text-center">Cadastro de veículos</h1>
                <VehicleForm onSubmit={handleCreateVeiculo} />
            </section>
        </main>
    )
}