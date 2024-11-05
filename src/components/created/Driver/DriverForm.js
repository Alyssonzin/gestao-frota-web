"use client"
import { cpfMask, dateMask, maxLengthNumbers, phoneMask } from "@/utils/Masks";
import { useEffect, useState } from "react";
import Image from "next/image";
import Motorista from "@/utils/objects/Motorista";

export default function DriverForm({ initialValues = Motorista, onSubmit }) {
    const [motorista, setMotorista] = useState(initialValues);

    useEffect(() => {
        setMotorista(initialValues);
    }, [initialValues]);

    return (
        <div className="space-y-4">
            

            <div>
                <div>
                    <Image src={motorista.cnh_picture} height={150} alt="Foto da cnh" />
                </div>
                <div>
                    <Image src={motorista.profile_doc_picture} height={150} alt="Foto do motorista com a cnh" />
                </div>
            </div>
        </div>
    )
}