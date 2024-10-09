export default function Input({ ...props }) {
    return (
        <label className="flex items-center bg-white text-black rounded-lg w-full h-10 border-4 shadow-lg border-white focus-within:border-cyan-600">
            <input {...props} className="focus:outline-none focus:placeholder:text-stone-600 h-full w-full px-1 rounded" />
        </label>
    )
}