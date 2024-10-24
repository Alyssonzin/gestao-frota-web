import Link from "next/link"
import { CheckboxWithText } from "@/components/created/Checkbox"
import Input from "@/components/created/Input"
import Footer from "@/components/created/Footer"
import NavHome from "@/components/created/NavHome"
import InputPassword from "@/components/created/InputPassword"

export default function Login() {

    return (
        <>
            <header>
                <NavHome />
            </header>

            <main className="flex min-h-screen items-center justify-center flex-col bg-gradient-to-tr from-blue-900 to-black text-white">
                <form className="flex items-center space-y-8 justify-center flex-col border-cyan-800 border-2 rounded p-10">
                    <h1 className="text-4xl font-bold select-none mb-4">Log<bold className="text-cyan-500">in</bold></h1>
                    <div className="flex flex-col space-y-4">
                        <Input id="usuario" type="text" placeholder="Usuário" />
                        <InputPassword id="senha" placeholder="Senha" />
                    </div>
                    <Link href="#" className="bg-blue-500 hover:bg-blue-700 font-bold text-center py-2 px-4 rounded w-full">Entrar</Link>
                    <Link href='#' className="hover:text-cyan-400 hover:underline">Esqueceu a senha?</Link>
                    <CheckboxWithText text={'Lembrar-me'} />
                </form>
            </main>
        </>
    )
}