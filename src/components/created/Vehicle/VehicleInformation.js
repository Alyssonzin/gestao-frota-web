"use client"
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../ui/carousel";

export default function VehicleInformation({ vehicle }) {

    return (
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

            <div>
                <div className="space-y-2">
                    <h2 className="text-xl font-bold mb-4">Informações do Veículo</h2>
                    <p><span className="font-bold">Placa:</span> {vehicle.plate}</p>
                    <p><span className="font-bold">Marca:</span> {vehicle.brand}</p>
                    <p><span className="font-bold">Modelo:</span> {vehicle.model}</p>
                    <p><span className="font-bold">Ano:</span> {vehicle.year}</p>
                    <p><span className="font-bold">Cor:</span> {vehicle.color}</p>
                    <p><span className="font-bold">Renavam:</span> {vehicle.renavam}</p>
                </div>
            </div>
        </div>
    )
}