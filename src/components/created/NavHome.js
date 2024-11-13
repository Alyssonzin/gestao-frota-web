"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavHome() {
    const pathname = usePathname();

    return (
        <nav className="flex justify-between w-full p-4 px-10 bg-gray-900 text-white select-none">
            <div className="flex items-center space-x-4">
                <Link href="/">
                    <Image src="/logomarca.jpg" alt="Logo" width={50} height={50} />
                </Link>

                <Link className="text-lg p-1 transition duration-200 hover:text-blue-500" href="/vehicle">Veículos</Link>
                <Link className="text-lg p-1 transition duration-200 hover:text-blue-500" href="/driver">Motoristas</Link>
            </div>

            {
                !pathname.includes('login') &&
                <Link
                    className="items-center flex text-lg transition duration-200 hover:bg-blue-500 px-3 border-2 border-blue-500 rounded-lg"
                    href='/login'
                >
                    Login
                </Link>
            }
        </nav>
    );
}