"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function InputPassword() {
    const [mostraSenha, setMostraSenha] = useState(false);

    function handleClick() {
        //Se mostraSenha for false, seta como true, se for true, seta como false
        setMostraSenha(!mostraSenha);
    }

    return (
        <label className="flex items-center bg-white text-black rounded-lg w-70 h-10 border-4 shadow-lg border-white focus-within:border-cyan-600">
            <input type={!mostraSenha ? "password" : "text"} placeholder="Senha" className="focus:outline-none focus:placeholder:text-stone-600 h-full w-full px-1 rounded" />
            
            <button type="button" className="text-stone-600 m-1" onClick={handleClick}>
                {mostraSenha ? <Eye /> : <EyeOff />}
            </button>
        </label>
    )
}