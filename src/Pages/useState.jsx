const UseState = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-6">
            
            <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8">
                
                <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
                    useState
                </h1>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    useState es un Hook de React que permite agregar estado
                    a los componentes funcionales.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    ¿Para qué sirve?
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>Guardar datos dinámicos.</li>
                    <li>Actualizar la interfaz cuando cambia la información.</li>
                    <li>Controlar formularios, contadores y eventos.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    ¿Cómo funciona?
                </h2>

                <p className="text-gray-700 mb-4">
                    useState devuelve un arreglo con dos elementos:
                </p>

                <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
                    <li>El valor actual del estado.</li>
                    <li>Una función para actualizar ese estado.</li>
                </ol>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Ejemplo conceptual
                </h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    Cuando el estado cambia mediante su función actualizadora,
                    el componente se vuelve a renderizar automáticamente.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Importante
                </h2>

                <p className="text-gray-700 leading-relaxed">
                    useState es ideal para manejar estados simples. Para estados
                    más complejos, se recomienda usar useReducer.
                </p>

            </div>
        </div>
    )
};

export default UseState;