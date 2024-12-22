"use client"

import NavAdmin from "../../../../components/created/NavAdmin";
import { useEffect, useState } from "react";
import { getDriverById, approveDriver as approveDriver, disapproveDriver } from "../../../../api/driverRoutes";
import { useRouter } from "next/navigation";
import Driver from "../../../../utils/objects/Motorista";
import Modal from "../../../../components/created/Modal";
import DriverInformation from "../../../../components/created/Driver/DriverInformation";
import VehicleInformation from "../../../../components/created/Vehicle/VehicleInformation";
import Vehicle from "../../../../utils/objects/Veiculo";
import Loading from "../../../../components/created/Loading";

export default function MotoristaPendente({ params }) {
    const { id } = params;
    const [driver, setDriver] = useState(Driver);
    const [vehicle, setVehicle] = useState(Vehicle);
    const [showModal, setShowModal] = useState(false);
    const [disapproveError, setDisapproveError] = useState(false);
    const [approveError, setApproveError] = useState(false);
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    useEffect(() => {
        const fetchDriverById = async () => {
            try {
                const driver = await getDriverById(id);
                setDriver(driver);
                setVehicle(driver.vehicle);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchDriverById();
    }, [])

    const handleApprove = async () => {
        try {
            setApproveError(false);
            await approveDriver(id);
            router.push("/driver");
        } catch (error) {
            setApproveError(true);
        }
    }

    const handleChangeMessage = (event) => {
        setMessage(event.target.value);
    }

    const handleDisapprove = async () => {
        try {
            setApproveError(false);
            await disapproveDriver({ driver_id: id, message });
            router.push("/driver");
        } catch (error) {
            setDisapproveError(true);
        }
    }

    return (
        <main className="flex min-h-screen bg-gray-200">
            <NavAdmin />

            <Modal showModal={showModal} closeModal={closeModal}>
                <h2 className="text-xl font-bold mb-4">Recusar motorista</h2>
                <p>Deixe uma mensagem:</p>
                {
                    disapproveError && <p className="text-red-500">Ocorreu um erro ao reprovar este motorista.</p>
                }
                <textarea
                    className="border bg-slate-200 mt-3 p-2 w-full h-52 rounded-xl resize-none"
                    onChange={handleChangeMessage}
                />

                <div className="mt-4 text-right space-x-3">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                        onClick={handleDisapprove}
                    >
                        Enviar
                    </button>
                    <button
                        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
                        onClick={closeModal}
                    >
                        Cancelar
                    </button>
                </div>
            </Modal>


            <section className="flex flex-col w-full p-4 ml-8 space-y-10">
                {
                    loading ? <Loading /> :
                        <div>
                            <DriverInformation driver={driver} />
                            <hr className="border-2 border-slate-600 rounded" />
                            <VehicleInformation vehicle={vehicle} />
                            <hr className="border-2 border-slate-600 rounded" />
                            <div className="flex justify-center text-white">
                                <button onClick={handleApprove} className="bg-green-500 hover:bg-green-700 w-[30%] m-4 p-2 rounded transition">Aprovar</button>
                                <button onClick={openModal} className="bg-red-500 hover:bg-red-700 w-[30%] m-4 p-2 rounded transition">Recusar</button>
                            </div>
                            {approveError && <p className="text-red-500 text-center">Ocorreu um erro ao aprovar este motorista</p>}
                        </div>
                }
            </section>

        </main>
    )
}