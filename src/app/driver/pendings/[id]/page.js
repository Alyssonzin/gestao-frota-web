"use client"

import NavAdmin from "@/components/created/NavAdmin";
import { useEffect, useState } from "react";
import { getDriverById, updateDriver } from "@/api/driverRoutes";
import { useRouter } from "next/navigation";
import Motorista from "@/utils/objects/Motorista";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../../components/ui/carousel";
import Modal from "../../../../components/created/Modal";

export default function MotoristaPendente({ params }) {
    const { id } = params;
    const [motorista, setMotorista] = useState(Motorista);
    const [showModal, setShowModal] = useState(false);
    const [disaproveMessage, setDisaproveMessage] = useState();
    const router = useRouter();

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    useEffect(() => {
        const getMotorista = async () => {
            try {
                const driver = await getDriverById(id);
                setMotorista(driver);
            } catch (error) {
                console.log(error);
            }
        }
        getMotorista();
    }, []);

    const handleAprove = async () => {
        try {
            await aproveDriver(id);
            router.push("/drivers");
        } catch (error) {
            console.log(error);
        }
    }

    const handleChangeMessage = (event) => {
        setDisaproveMessage(event.target.value);
    }

    const handleDisaprove = async () => {
        try {

            router.push("/drivers");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="flex min-h-screen bg-gray-200">
            <NavAdmin />

            <section className="flex flex-col w-full p-4 ml-8 space-y-10">
                <div className="flex w-full p-3">
                    <div className="w-[20%] mr-16">
                        <Carousel className="border border-black">
                            <CarouselContent>
                                <CarouselItem className="flex justify-center">
                                    <Image src={motorista.profile_doc_picture} alt="Imagem1" width={300} height={300} />
                                </CarouselItem>
                                <CarouselItem className="flex justify-center">
                                    <Image src={motorista.cnh_picture} alt="Imagem2" width={300} height={300} />
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <h2 className="text-xl text-center font-bold m-2">{`${motorista.user.name} ${motorista.user.last_name}`}</h2>
                    </div>

                    <div>
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold mb-4">Informações Pessoais</h2>
                            <p><span className="font-bold">CPF:</span> {motorista.user.cpf}</p>
                            <p><span className="font-bold">Data de Nascimento:</span> {motorista.user.birth_date}</p>
                            <p><span className="font-bold">CNH:</span> {motorista.cnh}</p>
                            <p><span className="font-bold">Telefone:</span> {motorista.user.phone}</p>
                            <p><span className="font-bold">E-mail:</span> {motorista.user.email}</p>
                        </div>
                    </div>
                </div>

                <hr className="border-2 border-black" />

                <div className="flex w-full p-3">
                    <div className="w-[20%] mr-16">
                        <Carousel className="border border-black">
                            <CarouselContent>
                                <CarouselItem className="flex justify-center">
                                    <Image src="/logomarca.jpg" alt="Imagem1" width={200} height={200} />
                                </CarouselItem>
                                <CarouselItem className="flex justify-center">
                                    <Image src="/logomarca.jpg" alt="Imagem2" width={200} height={200} />
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>

                    <Modal showModal={showModal} closeModal={closeModal}>
                        <h2 className="text-xl font-bold mb-4">Recusar motorista</h2>
                        <p>Deixe uma mensagem:</p>
                        <textarea 
                            className="border bg-slate-200 mt-3 p-2 w-full h-52 rounded-xl resize-none"
                            onChange={handleChangeMessage}
                        />

                        <div className="mt-4 text-right space-x-3">
                            <button
                                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                                onClick={handleDisaprove}
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

                    <div>
                        <div className="space-y-2">
                            <h2 className="text-xl font-bold mb-4">Informações do Veículo</h2>
                            <p><span className="font-bold">Placa:</span> {motorista.vehicle.plate}</p>
                            <p><span className="font-bold">Marca:</span> {motorista.vehicle.brand}</p>
                            <p><span className="font-bold">Modelo:</span> {motorista.vehicle.model}</p>
                            <p><span className="font-bold">Ano:</span> {motorista.vehicle.year}</p>
                            <p><span className="font-bold">Cor:</span> {motorista.vehicle.color}</p>
                            <p><span className="font-bold">Renavam:</span> {motorista.vehicle.renavam}</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center text-white">
                    <button onClick={handleAprove} className="bg-green-500 hover:bg-green-700 w-[30%] m-4 p-2 rounded transition">Aprovar</button>
                    <button onClick={openModal} className="bg-red-500 hover:bg-red-700 w-[30%] m-4 p-2 rounded transition">Recusar</button>
                </div>
            </section>
        </main>
    )
}