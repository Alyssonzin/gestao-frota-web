"use client";
import Input from "../../components/created/Input";
import NavAdmin from "../../components/created/NavAdmin";
import { useState, useEffect } from "react";
import { getDrivers, searchDriver } from "../../api/driverRoutes";
import DriverTable from "../../components/created/Driver/DriverTable";
import Loading from "../../components/created/Loading";

export default function Motoristas() {
    const [pesquisa, setPesquisa] = useState('');
    const [drivers, setDrivers] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMotoristas = async () => {
            try {
                const data = await getDrivers();
                const driversApproved = data.filter(driver => driver.approved);
                setDrivers(driversApproved);
            } catch (error) {
                setDrivers();
            } finally {
                setLoading(false);
            }
        }
        getMotoristas();
    }, []);

    const handleChange = (event) => {
        const { value } = event.target;
        setPesquisa(value);
    }

    //Busca ao pressionar ENTER
    const handleSearch = async (event) => {
        const { key } = event;
        if (key === 'Enter') {
            try {
                const driversFounded = await searchDriver(pesquisa);
                setDrivers(driversFounded);
            } catch {
                console.log('Erro ao buscar motoristas');
            }
        }
    }

    return (
        <main className="flex h-screen bg-gray-200">
            <NavAdmin />

            <section className="w-full p-4 ml-8 space-y-6">
                <h1 className="font-bold text-xl">Motoristas cadastrados</h1>
                <div className="flex justify-between gap-6">
                    <div className="w-[90%]">
                        <Input
                            onChange={handleChange}
                            onKeyDown={handleSearch}
                            name="pesquisa"
                            id="pesquisa"
                            type="text"
                            placeholder="Pesquisar"
                        />
                    </div>
                </div>

                <div className="flex flex-col space-y-4 bg-white h-[85%] overflow-y-scroll shadow-md rounded-xl p-2 pb-3">
                    {loading ? <Loading /> : <DriverTable data={drivers} />}
                </div>
            </section>
        </main>
    )
}