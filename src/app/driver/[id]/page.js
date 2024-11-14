"use client";
import { useEffect, useState } from "react";
import DriverInformation from "../../../components/created/driver/DriverInformation";
import Driver from "../../../utils/objects/Motorista";
import { getDriverById } from "../../../api/driverRoutes";
import NavAdmin from "../../../components/created/NavAdmin";

export default function VisualizarMotorista({ params }) {
    const { id } = params;
    const [driver, setDriver] = useState(Driver);

    useEffect(() => {
        const fetchDriverById = async () => {
            try {
                const driver = await getDriverById(id);
                setDriver(driver);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDriverById();
    }, []);

    return (
        <main className="flex min-h-screen bg-gray-200">
            <NavAdmin />

            <section className="flex flex-col w-full p-4 ml-8 space-y-10">
                <DriverInformation driver={driver} />
            </section>
        </main>
    )
}