"use client"
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../ui/carousel";

export default function VehicleInformation({ vehicle }) {
    const vehicle_pictures = vehicle.vehicle_pictures || [];
    
    return (
        <div className="space-y-10 w-full p-6 bg-gray-50 rounded-lg shadow-lg">
            <div className="flex items-center flex-col mb-6">
                <Carousel className="border-2 w-1/4 border-gray-300 rounded-lg">
                    <CarouselContent>
                        {
                            vehicle_pictures.map((picture, index) => (
                                <CarouselItem key={index} className="flex justify-center">
                                    <Image
                                        src={picture.url}
                                        alt="Fotos do veículo"
                                        width={500}
                                        height={500}
                                        className="shadow-md contain-size rounded-md"
                                    />
                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            <div className="w-full flex justify-center">
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Informações do Veículo</h2>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 pr-80 pl-80 p-5">
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