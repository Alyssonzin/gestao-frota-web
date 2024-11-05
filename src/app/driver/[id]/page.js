"use client"

import NavAdmin from "@/components/created/NavAdmin";
import { useEffect, useState } from "react";
import { getDriverById, updateDriver } from "@/api/driverRoutes";
import { useRouter } from "next/navigation";
import Motorista from "@/utils/objects/Motorista";
import DriverForm from "@/components/created/Driver/DriverForm";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../components/ui/carousel";

export default function AtualizarMotorista({ params }) {
    const { id } = params;
    const [motorista, setMotorista] = useState(Motorista);
    const router = useRouter();

    useEffect(() => {
        const getMotorista = async () => {
            try {
                const driver = await getDriverById(id);
                setMotorista(driver);
            } catch (error) {

            }
        }
        getMotorista();
    }, []);

    //Envia o motorista para o backend
    const handleEditaMotorista = async (data) => {
        try {
            await updateDriver(id, data);
            router.push('/driver');
        } catch (error) {
            alert('Erro ao atualizar motorista!');
        }
    }

    return (
        <main className="flex h-screen bg-gray-200">
            <NavAdmin />

            <section className="flex w-full p-4 ml-8 space-y-6">
                <div className="flex w-full p-3 bg-purple-300">
                    <div className="w-[20%]">
                        <Carousel className="border border-black ">
                            <CarouselContent>
                                <CarouselItem>
                                    <Image src="/logomarca.jpg" width={200} height={200} />
                                </CarouselItem>
                                <CarouselItem>
                                    <Image src="/images/2.jpg" width={200} height={200} />
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                        <h2 className="text-center font-bold">Alysson Pereira dos Santos</h2>
                    </div>

                    <div>
                        
                    </div>
                </div>



            </section>
        </main>
    )
}