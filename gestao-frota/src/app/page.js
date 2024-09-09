import Link from "next/link";

export default function Home() {
  return (
    <>
      <header>
        <nav className="flex justify-between w-full p-4 bg-gray-900 text-white select-none">
          <div className="flex items-center space-x-4">
            <Link className="text-lg p-2 transition duration-200 hover:text-blue-500" href="/">Veículos</Link>
            <Link className="text-lg p-2 transition duration-200 hover:text-blue-500" href="/">Motoristas</Link>
          </div>
          
          <Link className="items-center flex text-lg transition duration-200 hover:bg-blue-500 px-3 rounded-lg" href='/login'>Login</Link>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">

        <h1 className="text-6xl font-bold select-none">
          Bem-vindo ao <span className="text-blue-600">Drivers Company</span>
        </h1>
        <p className="mt-3 text-2xl select-none">Sistema de Gestão de Frotas</p>

      </main>
    </>
  );
}
