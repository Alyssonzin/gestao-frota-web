"use client"

import NavAdmin from "@/components/created/NavAdmin";
import { useEffect, useState } from "react";
import { getDriverById, updateDriver } from "@/api/driverRoutes";
import { useRouter } from "next/navigation";
import Motorista from "@/utils/objects/Motorista";
import DriverForm from "@/components/created/driver/DriverForm";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../../components/ui/carousel";

export default function MotoristaPendente({ params }) {
    const { id } = params;
    const [motorista, setMotorista] = useState(Motorista);
    const router = useRouter();

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

    return (
        <main className="flex h-screen bg-gray-200">
            <NavAdmin />

            <section className="flex w-full p-4 ml-8 space-y-6">
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
            </section>
        </main>
    )
}