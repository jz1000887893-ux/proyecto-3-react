const UseReducer = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-6">
            
            <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8">
                
                <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">
                    useReducer
                </h1>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    useReducer es un Hook de React que se utiliza para manejar estados
                    complejos dentro de un componente. Es una alternativa a useState
                    cuando la lógica del estado es más elaborada.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    ¿Para qué sirve?
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>Manejar múltiples estados relacionados.</li>
                    <li>Controlar cambios de estado con lógica estructurada.</li>
                    <li>Organizar mejor aplicaciones grandes.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    ¿Cómo funciona?
                </h2>

                <p className="text-gray-700 mb-4">
                    useReducer recibe dos parámetros principales:
                </p>

                <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
                    <li>Una función reducer.</li>
                    <li>El estado inicial.</li>
                </ol>

                <p className="text-gray-700 mb-6">
                    El reducer recibe el estado actual y una acción, y retorna
                    el nuevo estado.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Conceptos importantes
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>State: el estado actual.</li>
                    <li>Dispatch: función para enviar acciones.</li>
                    <li>Action: objeto que describe el cambio.</li>
                    <li>Reducer: función que decide cómo cambia el estado.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Importante
                </h2>

                <p className="text-gray-700 leading-relaxed">
                    useReducer es muy útil cuando el estado depende del estado
                    anterior o cuando existen múltiples transiciones de estado.
                </p>

            </div>
        </div>
    );
};

export default UseReducer;