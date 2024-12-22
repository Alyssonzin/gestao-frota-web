"use client";
import Link from "next/link"
import { CheckboxWithText } from "../../components/created/Checkbox";
import Input from "../../components/created/Input";
import NavHome from "../../components/created/NavHome";
import InputPassword from "../../components/created/InputPassword";
import { useState } from "react"
import { login } from "../../api/userRoutes";
import { useRouter } from "next/navigation";

export default function Login() {
    const [form, setForm] = useState();
    const [loginError, setLoginError] = useState(false);
    const router = useRouter();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({
            ...form,
            [name]: value,
        });
    }

    const handleSubmit = async () => {
        try {
            setLoginError(false);
            await login(form);
            router.push('/driver');
        } catch (error) {
            setLoginError(true);
            console.error(error);
        }
    }

    return (
        <>
            <header>
                <NavHome />
            </header>

            <main className="flex min-h-screen items-center justify-center flex-col bg-gradient-to-tr from-blue-900 to-black text-white">
                <form className="flex items-center space-y-8 justify-center flex-col border-cyan-800 border-2 rounded p-10">
                    <h1 className="text-4xl font-bold select-none mb-4">Log<bold className="text-cyan-500">in</bold></h1>
                    <div className="flex flex-col space-y-4">
                        <Input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="email"
                            onChange={handleChange}
                        />
                        <InputPassword
                            id="password"
                            name="password"
                            placeholder="Senha"
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 font-bold text-center py-2 px-4 rounded w-full"
                        type="button"
                        onClick={handleSubmit}
                    >
                        Entrar
                    </button>
                    {loginError && <p className="text-red-500">Erro ao efetuar o login</p>}
                    <Link href='#' className="hover:text-cyan-400 hover:underline">Esqueceu a senha?</Link>
                    <CheckboxWithText text={'Lembrar-me'} />
                </form>
            </main>
        </>
    )
}