"use client"
import Input from "@/components/created/Input";
import NavAdmin from "@/components/created/NavAdmin";
import { useState, useEffect } from "react";
import { getVehicles } from "@/api/vehicleRouter";
import VehicleTable from "@/components/created/vehicle/VehicleTable";
import Loading from "@/components/created/Loading";

export default function Veiculos() {
    const [pesquisa, setPesquisa] = useState('');
    const [vehicles, setVehicles] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getVeiculos = async () => {
            try {
                setLoading(true);
                const data = await getVehicles();
                setVehicles(data);
            } catch (error) {
                setVehicles();
            } finally {
                setLoading(false);
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
                </div>

                <div className="flex flex-col space-y-4 bg-white h-[85%] overflow-y-scroll shadow-md rounded-xl p-2 pb-3">
                    {loading ? <Loading /> : <VehicleTable data={vehicles} />}
                </div>
            </section>
        </main>
    );
}