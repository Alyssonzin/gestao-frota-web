"use client"
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../ui/carousel";

export default function DriverInformation({ driver }) {

    return (
        <div className="space-y-10 w-full p-6 bg-gray-50 rounded-lg shadow-lg">
            <div className="flex items-center flex-col mb-6">
                <Carousel className="border-2 w-1/4 border-gray-300 rounded-lg">
                    <CarouselContent>
                        <CarouselItem className="flex justify-center">
                            <Image
                                src={driver.profile_doc_picture || "/logomarca.jpg"}
                                alt="Imagem de perfil"
                                width={300}
                                height={300}
                                className="rounded-full shadow-md"
                            />
                        </CarouselItem>
                        <CarouselItem className="flex justify-center">
                            <Image
                                src={driver.cnh_picture || "/logomarca.jpg"}
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
                <h2 className="text-2xl text-center font-semibold mt-4">{`${driver.user.name} ${driver.user.last_name}`}</h2>
            </div>

            <div className="w-full flex justify-center">
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Informações Pessoais</h2>
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 pr-80 pl-80 p-5">
                        <p className="text-left"><span className="font-bold text-gray-600">CPF:</span> {driver.user.cpf}</p>
                        <p className="text-left"><span className="font-bold text-gray-600">Data de Nascimento:</span> {driver.user.birth_date}</p>
                        <p className="text-left"><span className="font-bold text-gray-600">CNH:</span> {driver.cnh}</p>
                        <p className="text-left"><span className="font-bold text-gray-600">Telefone:</span> {driver.user.phone}</p>
                        <p className="text-left"><span className="font-bold text-gray-600">E-mail:</span> {driver.user.email}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}