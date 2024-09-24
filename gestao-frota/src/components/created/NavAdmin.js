import Link from 'next/link';
import { UsersRound, CarFront } from 'lucide-react';

export default function NavAdmin() {
    return (
        <aside className="flex flex-col items-center h-full min-w-20 shadow-inner bg-gray-800 pt-10">
            <nav className="sticky top-10 w-full">
                <ul className="flex flex-col items-center">
                    <li className="w-full flex justify-center text-white hover:bg-gray-500">
                        <Link href="/motoristas" className="flex justify-center h-full w-full py-5">
                            <UsersRound size={30} />
                        </Link>
                    </li>

                    <li className="w-full flex justify-center text-white hover:bg-gray-500">
                        <Link href="/veiculos" className="flex justify-center h-full w-full py-5">
                            <CarFront size={35} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}