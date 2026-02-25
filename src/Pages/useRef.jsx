const UseRef = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-6">
            
            <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8">
                
                <h1 className="text-4xl font-bold text-yellow-600 mb-6 text-center">
                    useRef
                </h1>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    useRef es un Hook de React que permite crear una referencia mutable
                    que persiste durante todo el ciclo de vida del componente.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    ¿Para qué sirve?
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>Acceder directamente a elementos del DOM.</li>
                    <li>Guardar valores que no necesitan provocar un render.</li>
                    <li>Mantener datos persistentes entre renderizados.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    ¿Cómo funciona?
                </h2>

                <p className="text-gray-700 mb-6">
                    useRef devuelve un objeto con una propiedad llamada 
                    <span className="font-semibold text-yellow-700"> current</span>.
                    Ese valor puede modificarse sin que el componente se vuelva a renderizar.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Casos comunes de uso
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>Enfocar automáticamente un input.</li>
                    <li>Controlar temporizadores.</li>
                    <li>Guardar el valor previo de una variable.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Importante
                </h2>

                <p className="text-gray-700 leading-relaxed">
                    A diferencia de useState, cambiar el valor de useRef no genera
                    un nuevo render del componente.
                </p>

            </div>
        </div>
    )
}

export default UseRef;