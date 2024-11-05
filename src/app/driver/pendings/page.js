"use client";
import { useEffect, useState } from "react";
import NavAdmin from "@/components/created/NavAdmin";
import Input from "@/components/created/Input";
import Link from "next/link";
import DriverTable from "@/components/created/driver/DriverTable";
import { getPendingDrivers } from "@/api/driverRoutes";

export default function Pendentes() {
    const [pesquisa, setPesquisa] = useState('');
    const [motoristas, setMotoristas] = useState();

    useEffect(() => {
        const getMotoristasPendentes = async () => {
            try {
                const data = await getPendingDrivers();
                setMotoristas(data);
            } catch (error) {
                setMotoristas();
            }
        }
        getMotoristasPendentes();
    }, []);

    const handleChange = (event) => {
        const { value } = event.target;
        setPesquisa(value);
    }

    //Busca ao pressionar ENTER
    const handleSearch = (event) => {
        const { key } = event;
        if (key === 'Enter') {
            console.log(pesquisa);
        }
    }

    return (
        <main className="flex h-screen bg-gray-200">
            <NavAdmin />

            <section className="w-full p-4 ml-8 space-y-6">
                <div className="flex justify-between gap-6">
                    <div className="w-[90%]">
                        <Input
                            onChange={handleChange}
                            onKeyDown={handleSearch}
                            name="pesquisa"
                            id="pesquisa"
                            type="text"
                            placeholder="Pesquisar"
                        />
                    </div>
                </div>

                <div className="flex flex-col space-y-4 bg-white h-[85%] overflow-y-scroll shadow-md rounded-xl p-2 pb-3">
                    <DriverTable data={motoristas} />
                </div>
            </section>
        </main>
    )
}