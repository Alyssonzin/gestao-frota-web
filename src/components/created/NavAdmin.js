import Link from 'next/link';
import { UsersRound, CarFront, UserRoundPen, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function NavAdmin() {
    const router = useRouter();

    const logOut = () => {
        document.cookie = 'email=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
        router.push('/');
    }

    return (
        <aside className="flex flex-col items-center min-w-20 shadow-inner bg-gray-800 pt-10 pb-5">
            <nav className="flex flex-col justify-between sticky top-10 w-full h-full">
                <ul className="flex flex-col">
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
                            <UserRoundPen size={30} />
                        </Link>
                    </li>
                </ul>

                <div>
                    <button
                        className="w-full flex justify-center text-white hover:bg-gray-500 py-5"
                        onClick={logOut}>
                        <LogOut size={30} />
                    </button>
                </div>
            </nav>
        </aside>
    );
}