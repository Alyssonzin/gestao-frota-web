"use client"
import NavAdmin from "../../../components/created/NavAdmin";
import { useEffect, useState } from "react";
import { getVehicleById } from "../../../api/vehicleRouter";
import Veiculo from "../../../utils/objects/Veiculo";
import VehicleInformation from "../../../components/created/Vehicle/VehicleInformation";
import Loading from "../../../components/created/Loading";

export default function VisualizarVeiculo({ params }) {
    const { id } = params;
    const [vehicle, setVehicle] = useState(Veiculo);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getVeiculo = async () => {
            try {
                const vehicle = await getVehicleById(id);
                setVehicle(vehicle);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        getVeiculo();
    }, [id]);

    return (
        <main className="flex min-h-screen bg-gray-200">
            <NavAdmin />
            <section className="flex flex-col items-center w-full p-4 ml-8 space-y-6">
                {loading ? <Loading /> : <VehicleInformation vehicle={vehicle} />}
            </section>
        </main>
    )
}