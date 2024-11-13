"use client"
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../ui/carousel";

export default function DriverInformation({ driver }) {

    return (
        <div className="flex w-full p-3">
            <div className="w-[20%] mr-16">
                <Carousel className="border border-black">
                    <CarouselContent>
                        <CarouselItem className="flex justify-center">
                            <Image src={driver.profile_doc_picture || "/logomarca.jpg"} alt="Imagem1" width={300} height={300} />
                        </CarouselItem>
                        <CarouselItem className="flex justify-center">
                            <Image src={driver.cnh_picture || "/logomarca.jpg"} alt="Imagem2" width={300} height={300} />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <h2 className="text-xl text-center font-bold m-2">{`${driver.user.name} ${driver.user.last_name}`}</h2>
            </div>

            <div>
                <div className="space-y-2">
                    <h2 className="text-xl font-bold mb-4">Informações Pessoais</h2>
                    <p><span className="font-bold">CPF:</span> {driver.user.cpf}</p>
                    <p><span className="font-bold">Data de Nascimento:</span> {driver.user.birth_date}</p>
                    <p><span className="font-bold">CNH:</span> {driver.cnh}</p>
                    <p><span className="font-bold">Telefone:</span> {driver.user.phone}</p>
                    <p><span className="font-bold">E-mail:</span> {driver.user.email}</p>
                </div>
            </div>
        </div>
    )
}