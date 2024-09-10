import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex justify-evenly items-center p-4 bg-gray-900 text-white text-sm">
            <div>
                <Image src="/logomarca.jpg" alt="Drivers Company" width={100} height={100} />
            </div>

            <div className="space-y-2">
                <p>Rua José Francisco Alves, 558 - Araranguá - SC, CEP 88905-256</p>
                <p>Contato: ( 51 ) 93300-0408</p>
                <p>© 2035 Drivers Company</p>
            </div>

        </footer>
    )
}