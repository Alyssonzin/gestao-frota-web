import { useRouter } from "next/navigation";

export default function Motoristas() {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Motorista {id}</h1>
        </div>
    );
}