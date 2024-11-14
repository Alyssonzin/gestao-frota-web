"use client"
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../ui/carousel";

export default function VehicleInformation({ vehicle }) {

    return (
<div className="space-y-10 w-full p-6 bg-gray-50 rounded-lg shadow-lg">
            <div className="flex items-center flex-col mb-6">
                <Carousel className="border-2 w-1/4 border-gray-300 rounded-lg">
                    <CarouselContent>
                        <CarouselItem className="flex justify-center">
                            <Image
                                src={"/logomarca.jpg"}
                                alt="Imagem de perfil"
                                width={300}
                                height={300}
                                className="rounded-full shadow-md"
                            />
                        </CarouselItem>
                        <CarouselItem className="flex justify-center">
                            <Image
                                src={"/logomarca.jpg"}
                                alt="Imagem CNH"
                                width={300}
                                height={300}
                                className="rounded-lg shadow-md"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            <div className="w-full">
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Informações do Veículo</h2>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                        <p><span className="font-bold text-gray-600">Marca:</span> {vehicle.brand}</p>
                        <p><span className="font-bold text-gray-600">Modelo:</span> {vehicle.model}</p>
                        <p><span className="font-bold text-gray-600">Ano:</span> {vehicle.year}</p>
                        <p><span className="font-bold text-gray-600">Cor:</span> {vehicle.color}</p>
                        <p><span className="font-bold text-gray-600">Placa:</span> {vehicle.plate}</p>
                        <p><span className="font-bold text-gray-600">Renavam:</span> {vehicle.renavam}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}