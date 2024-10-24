
import NavHome from "@/components/created/NavHome";

export default function Home() {
  return (
    <>
      <header>
        <NavHome />
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
