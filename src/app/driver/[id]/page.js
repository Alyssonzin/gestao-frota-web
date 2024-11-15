"use client"
import NavAdmin from "@/components/created/NavAdmin";
import { useEffect, useState } from "react";
import { getDriverById } from "../../../api/driverRoutes";
import Driver from "../../../utils/objects/Motorista";
import DriverInformation from "../../../components/created/driver/DriverInformation";

export default function VisualizarMotorista({ params }) {
    const { id } = params;
    const [driver, setDriver] = useState(Driver);

    useEffect(() => {
        const getMotorista = async () => {
            const driver = await getDriverById(id);
            setDriver(driver);
        }
        getMotorista();
    }, [id]);

    return (
        <main className="flex min-h-screen bg-gray-200">
            <NavAdmin />
            <section className="flex flex-col items-center w-full p-4 ml-8 space-y-6">
                <DriverInformation driver={driver} />
            </section>
        </main>
    )
}