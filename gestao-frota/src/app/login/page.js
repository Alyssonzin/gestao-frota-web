import Link from "next/link"
import { CheckboxWithText } from "@/components/Checkbox"

export default function Login() {
    return (
        <main className="flex min-h-screen items-center justify-center flex-col bg-gradient-to-tr from-blue-900 to-black text-white">
            <form className="flex items-center space-y-8 justify-center flex-col border-cyan-800 border-2 rounded p-10">
                <h1 className="text-4xl font-bold select-none mb-4">Login</h1>

                <div className="flex flex-col space-y-4">
                    <input className="text-black p-2 rounded-lg focus:placeholder:text-stone-600 focus:outline-cyan-600 shadow-md w-60" type="text" placeholder="Usuário"></input>
                    <input className="text-black p-2 rounded-lg focus:placeholder:text-stone-600 focus:outline-cyan-600 shadow-md w-60" type="password" placeholder="Senha"></input>
                </div>

                <button type="button" className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded w-full">
                    <Link href="#">Entrar</Link>
                </button>

                <Link href='#' className="hover:text-cyan-400 hover:underline">Esqueceu a senha?</Link>

                <CheckboxWithText text={'Lembrar-me'} />
            </form>
        </main>
    )
}