"use client"

import NavAdmin from "@/components/created/NavAdmin";
import DriverForm from "@/components/created/DriverForm";
import Footer from "@/components/created/Footer";
import { useRouter } from "next/navigation";
import { createDriver } from "@/api/routes";

export default function CadastrarMotorista() {
    const router = useRouter();

    const handleCreateMotorista = async (data) => {
        try {
            await createDriver(data);
            router.push('/driver');
        } catch (error) {
            alert('Erro ao cadastrar motorista!');
        }
    }

    return (
        <>
            <main className="flex h-screen bg-gray-200">
                <NavAdmin />
                <section className="flex flex-col items-center w-full p-4 ml-8 space-y-6">

                    <h1 className="text-3xl font-bold text-center">Cadastro de motoristas</h1>
                    <DriverForm onsubmit={handleCreateMotorista} />

                </section>
            </main>
            <Footer />
        </>
    )
}