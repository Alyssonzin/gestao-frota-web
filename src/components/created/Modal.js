export default function Modal({ showModal, closeModal, children }) {
    if (!showModal) return null; // Não renderiza nada se `showModal` for falso

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closeModal}
        >
            <div
                className="bg-slate-100 p-6 rounded-lg max-w-lg w-full"
                onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do modal
            >
                <button
                    className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-800"
                    onClick={closeModal}
                >
                </button>
                <div>{children}</div>
            </div>
        </div>
    );
};