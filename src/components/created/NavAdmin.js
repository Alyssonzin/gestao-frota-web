import Link from 'next/link';
import { UsersRound, CarFront, UserRoundPen } from 'lucide-react';

export default function NavAdmin() {
    return (
        <aside className="flex flex-col items-center h-full min-w-20 shadow-inner bg-gray-800 pt-10">
            <nav className="sticky top-10 w-full">
                <ul className="flex flex-col items-center">
                    <li className="w-full flex justify-center text-white hover:bg-gray-500">
                        <Link href="/driver" className="flex justify-center h-full w-full py-5">
                            <UsersRound size={30} />
                        </Link>
                    </li>

                    <li className="w-full flex justify-center text-white hover:bg-gray-500">
                        <Link href="/vehicle" className="flex justify-center h-full w-full py-5">
                            <CarFront size={35} />
                        </Link>
                    </li>

                    <li className="w-full flex justify-center text-white hover:bg-gray-500">
                        <Link href="/driver/pendings" className="flex justify-center h-full w-full py-5">
                            <UserRoundPen size={35} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}