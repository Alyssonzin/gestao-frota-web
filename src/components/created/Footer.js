import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex justify-evenly items-center p-4 bg-gray-900 text-white text-sm">
            <div>
                <Image src="/logomarca.jpg" alt="Company" width={100} height={100} />
            </div>

            <div className="space-y-2">
                <p>Rua das Flores, 999 - Sangão - SC, CEP 88717-000</p>
                <p>Contato: ( 99 ) 9999-9999</p>
                <p>© Footer</p>
            </div>

        </footer>
    )
}