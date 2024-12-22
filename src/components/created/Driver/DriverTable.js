"use client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../../ui/dropdown-menu"
import { ChevronDown } from "lucide-react";
import { deleteDriver, disableDriver } from "../../../api/driverRoutes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Modal from "../Modal";
import Input from "../Input";
import { createImportantDate } from "../../../api/importantDateRoutes";
import { useState } from "react";

export default function DriverTable({ data }) {
    const [showModal, setShowModal] = useState(false);
    const [importantDateError, setImportantDateError] = useState(false);
    const [importantDate, setImportantDate] = useState();

    const openModal = (driverId) => {
        setImportantDate({
            driver_id: driverId
        });
        setShowModal(true);
    }

    const closeModal = () => setShowModal(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setImportantDate({
            ...importantDate,
            [name]: value
        });
    }

    const submitImportantDate = async () => {
        try {
            setImportantDateError(false);
            await createImportantDate(importantDate);
            closeModal();
        } catch (error) {
            setImportantDateError(true);
        }
    }

    const handleDisable = async (id) => {
        try {
            await disableDriver(id);
            window.location.reload();
        } catch (error) {
            console.log(error);
            alert('Erro ao desativar este motorista!');
        }
    }

    const handleDelete = async (id) => {
        try {
            await deleteDriver(id);
            window.location.reload();
        } catch (error) {
            console.log(error);
            alert('Erro ao excluir o motorista!');
        }
    }

    return (
        <table className="w-full">
            <Modal showModal={showModal} closeModal={closeModal}>
                <h2 className="text-xl font-bold mb-4">Criar Alerta</h2>
                {
                    importantDateError && <p className="text-red-500">Ocorreu um erro ao criar o alerta.</p>
                }
                <div className="space-y-5">
                    <div className="w-1/3">
                        <Input
                            type="date"
                            id="date"
                            name="date"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="text"
                            id="description"
                            name="description"
                            placeholder="Digite um alerta"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="mt-4 text-right space-x-3">
                    <button
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                        onClick={() => submitImportantDate()}
                    >
                        Enviar
                    </button>
                    <button
                        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
                        onClick={closeModal}
                    >
                        Cancelar
                    </button>
                </div>
            </Modal>

            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>CPF</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {
                    //Se data não for vazio, cria uma linha pra cada item.
                    data ? data.map((item, index) => (
                        <tr key={item.id} className={index % 2 == 0 ? "border-t h-14" : "border-t h-14 bg-slate-200"}>
                            <td>{item.id}</td>
                            <td>{`${item.user.name} ${item.user.last_name}`}</td>
                            <td>{item.user.cpf}</td>

                            <td className="space-x-4 w-1/4">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="text-white">
                                        <ChevronDown size={25} className="bg-slate-800 rounded-full shadow-md" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem className="hover:bg-blue-400 hover:text-white cursor-pointer">
                                                <Link href={
                                                    usePathname().includes('pendings') ?
                                                        `/driver/pendings/${item.id}` :
                                                        `/driver/${item.id}`
                                                }
                                                >Visualizar
                                                </Link>
                                            </DropdownMenuItem>
                                            {
                                                !usePathname().includes('pending') ?
                                                    <DropdownMenuItem className="hover:bg-slate-400 hover:text-white cursor-pointer">
                                                        <button onClick={() => openModal(item.id)}>Criar Alerta</button>
                                                    </DropdownMenuItem> : null
                                            }
                                            {
                                                !usePathname().includes('pending') ?
                                                    <DropdownMenuItem className="hover:bg-red-600 hover:text-white cursor-pointer">
                                                        <button onClick={() => handleDisable(item.id)}>Desativar</button>
                                                    </DropdownMenuItem>
                                                    :
                                                    <DropdownMenuItem className="hover:bg-red-600 hover:text-white cursor-pointer">
                                                        <button onClick={() => handleDelete(item.id)}>Excluir</button>
                                                    </DropdownMenuItem>
                                            }
                                        </DropdownMenuGroup>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </td>
                        </tr>
                    )) : <tr><td colSpan="3">Nenhum dado encontrado</td></tr>
                }
            </tbody>
        </table >
    );
}