
import Link from "next/link";
import Input from "@/components/created/Input";
import NavAdmin from "@/components/created/NavAdmin";
import Table from "@/components/created/Table";
import Footer from "@/components/created/Footer";

export default function Veiculos() {
    const carros = [
        { id: 1, modelo: 'Gol', placa: 'ABC-1234' },
        { id: 2, modelo: 'Uno', placa: 'DEF-5678' },
        { id: 3, modelo: 'Celta', placa: 'GHI-9012' },
        { id: 4, modelo: 'Civic', placa: 'JKL-3456' },
        { id: 5, modelo: 'Corolla', placa: 'MNO-7890' },
        { id: 6, modelo: 'Gol', placa: 'ABC-1234' },
        { id: 7, modelo: 'Uno', placa: 'DEF-5678' },
        { id: 8, modelo: 'Celta', placa: 'GHI-9012' },
        { id: 1, modelo: 'Gol', placa: 'ABC-1234' },
        { id: 2, modelo: 'Uno', placa: 'DEF-5678' },
        { id: 3, modelo: 'Celta', placa: 'GHI-9012' },
        { id: 4, modelo: 'Civic', placa: 'JKL-3456' },
        { id: 5, modelo: 'Corolla', placa: 'MNO-7890' },
        { id: 6, modelo: 'Gol', placa: 'ABC-1234' },
        { id: 7, modelo: 'Uno', placa: 'DEF-5678' },
        { id: 8, modelo: 'Celta', placa: 'GHI-9012' },
        { id: 1, modelo: 'Gol', placa: 'ABC-1234' },
        { id: 2, modelo: 'Uno', placa: 'DEF-5678' },
        { id: 3, modelo: 'Celta', placa: 'GHI-9012' },
        { id: 4, modelo: 'Civic', placa: 'JKL-3456' },
        { id: 5, modelo: 'Corolla', placa: 'MNO-7890' },
        { id: 6, modelo: 'Gol', placa: 'ABC-1234' },
        { id: 7, modelo: 'Uno', placa: 'DEF-5678' },
        { id: 8, modelo: 'Celta', placa: 'GHI-9012' },
        { id: 1, modelo: 'Gol', placa: 'ABC-1234' },
        { id: 2, modelo: 'Uno', placa: 'DEF-5678' },
        { id: 3, modelo: 'Celta', placa: 'GHI-9012' },
        { id: 4, modelo: 'Civic', placa: 'JKL-3456' },
        { id: 5, modelo: 'Corolla', placa: 'MNO-7890' },
        { id: 6, modelo: 'Gol', placa: 'ABC-1234' },
        { id: 7, modelo: 'Uno', placa: 'DEF-5678' },
        { id: 8, modelo: 'Celta', placa: 'GHI-9012' },
        { id: 1, modelo: 'Gol', placa: 'ABC-1234' },
        { id: 2, modelo: 'Uno', placa: 'DEF-5678' },
        { id: 3, modelo: 'Celta', placa: 'GHI-9012' },
        { id: 4, modelo: 'Civic', placa: 'JKL-3456' },
        { id: 5, modelo: 'Corolla', placa: 'MNO-7890' },
        { id: 6, modelo: 'Gol', placa: 'ABC-1234' },
        { id: 7, modelo: 'Uno', placa: 'DEF-5678' },
        { id: 8, modelo: 'Celta', placa: 'GHI-9012' },
        { id: 1, modelo: 'Gol', placa: 'ABC-1234' },
        { id: 2, modelo: 'Uno', placa: 'DEF-5678' },
        { id: 3, modelo: 'Celta', placa: 'GHI-9012' },
        { id: 4, modelo: 'Civic', placa: 'JKL-3456' },
        { id: 5, modelo: 'Corolla', placa: 'MNO-7890' },
        { id: 6, modelo: 'Gol', placa: 'ABC-1234' },
        { id: 7, modelo: 'Uno', placa: 'DEF-5678' },
        { id: 8, modelo: 'Celta', placa: 'GHI-9012' },
    ];
    const colunas = ['id', 'modelo', 'placa'];
    const headers = ['#', 'Modelo', 'Placa'];


    return (
        <>
            <main className="flex h-screen bg-gray-200">
                <NavAdmin />

                <section className="w-1/2 p-4 ml-8 space-y-6">
                    <div className="w-3/4">
                        <Input id="pesquisa" type="text" placeholder="Pesquisar" />
                    </div>
                    <div className="flex flex-col space-y-4 bg-white h-[85%] overflow-y-scroll shadow-md rounded-xl p-2 pb-3">
                        <Table headers={headers} data={carros} columns={colunas} />
                        <div className="self-end sticky bottom-2 text-end mr-4">
                            <Link href="/veiculos/novo" className="bg-green-500 hover:bg-green-600 transition duration-200 shadow-md rounded-md text-white p-2">Novo +</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}