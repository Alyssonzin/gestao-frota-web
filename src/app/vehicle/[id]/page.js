"use client"
import NavAdmin from "@/components/created/NavAdmin";
import { useEffect, useState } from "react";
import { getVehicleById, updateVehicle } from "@/api/vehicleRouter";
import Veiculo from "@/utils/objects/Veiculo";
import VehicleInformation from "@/components/created/vehicle/VehicleInformation";

export default function VisualizarVeiculo({ params }) {
    const { id } = params;
    const [veiculo, setVeiculo] = useState(Veiculo);

    useEffect(() => {
        const getVeiculo = async () => {
            const vehicle = await getVehicleById(id);
            setVeiculo(vehicle);
        }
        getVeiculo();
    }, [id]);

    return (
        <main className="flex min-h-screen bg-gray-200">
            <NavAdmin />
            <section className="flex flex-col items-center w-full p-4 ml-8 space-y-6">
                <VehicleInformation vehicle={veiculo} />
            </section>
        </main>
    )
}