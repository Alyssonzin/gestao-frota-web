import Link from "next/link";
export default function NavHome() {
    return (
        <nav className="flex justify-between w-full p-4 bg-gray-900 text-white select-none">
            <div className="flex items-center space-x-4">
                <Link className="text-lg p-2 transition duration-200 hover:text-blue-500" href="/">Veículos</Link>
                <Link className="text-lg p-2 transition duration-200 hover:text-blue-500" href="/">Motoristas</Link>
            </div>

            <Link className="items-center flex text-lg transition duration-200 hover:bg-blue-500 px-3 rounded-lg" href='/login'>Login</Link>
        </nav>
    );
}