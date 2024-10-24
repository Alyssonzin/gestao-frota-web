"use client"

import NavAdmin from "@/components/created/NavAdmin";
import { useEffect, useState } from "react";
import Footer from "@/components/created/Footer";
import { getDriverById, updateDriver } from "@/api/routes";
import { useRouter } from "next/navigation";
import Motorista from "@/utils/objects/Motorista";
import DriverForm from "@/components/created/DriverForm";

export default function AtualizarMotorista({ params }) {
    const { id } = params;
    const [motorista, setMotorista] = useState(Motorista);
    const router = useRouter();

    useEffect(() => {
        const getMotorista = async () => {
            try {
                const driver = await getDriverById(id);
                setMotorista(driver);
            } catch (error) {
                alert('Erro ao carregar os dados do motorista');
            }
        }
        getMotorista();
    }, []);

    //Envia o motorista para o backend
    const handleEditaMotorista = async (data) => {
        try {
            await updateDriver(id, data);
            router.push('/driver');
        } catch (error) {
            alert('Erro ao atualizar motorista!');
        }
    }

    return (
        <main className="flex h-screen bg-gray-200">
            <NavAdmin />

            <section className="flex flex-col items-center w-full p-4 ml-8 space-y-6">

                <h1 className="text-3xl font-bold text-center">Editar motorista</h1>

                <DriverForm initialValues={motorista} onSubmit={handleEditaMotorista} />
            </section>
        </main>
    )
}