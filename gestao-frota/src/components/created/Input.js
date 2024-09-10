export default function Input({ ...props }) {
    return (
        <div>
            <input {...props} className="text-black p-2 rounded-lg focus:placeholder:text-stone-600 focus:outline-cyan-600 shadow-md w-60" />
        </div>
    )
}