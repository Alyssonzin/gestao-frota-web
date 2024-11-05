"use client"
import Link from "next/link";
import Input from "@/components/created/Input";
import NavAdmin from "@/components/created/NavAdmin";
import { useState, useEffect } from "react";
import { getVehicles } from "@/api/vehicleRouter";
import VehicleTable from "@/components/created/vehicle/VehicleTable";

export default function Veiculos() {
    const [pesquisa, setPesquisa] = useState('');
    const [veiculos, setVeiculos] = useState();

    useEffect(() => {
        const getVeiculos = async () => {
            try {
                const data = await getVehicles();
                setVeiculos(data);
            } catch (error) {
                setVeiculos();
            }
        }
        getVeiculos();
    }, []);

    const handleChange = (event) => {
        const { value } = event.target;
        setPesquisa(value);
    }

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
                            id="pesquisa"
                            name="pesquisa"
                            type="text"
                            placeholder="Pesquisar"
                        />
                    </div>
                    <Link href="/vehicle/novo" className="bg-green-500 hover:bg-green-600 transition duration-200 shadow-md rounded-md select-none text-white p-2">Novo +</Link>
                </div>

                <div className="flex flex-col space-y-4 bg-white h-[85%] overflow-y-scroll shadow-md rounded-xl p-2 pb-3">
                    <VehicleTable data={veiculos} />
                </div>
            </section>
        </main>
    );
}