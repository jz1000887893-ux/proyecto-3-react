const UseMemo = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-6">
            
            <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-8">
                
                <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">
                    useMemo
                </h1>

                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    useMemo es un Hook de React que permite memorizar el resultado
                    de una función para evitar cálculos innecesarios en cada render.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    ¿Para qué sirve?
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                    <li>Optimizar cálculos costosos.</li>
                    <li>Mejorar el rendimiento del componente.</li>
                    <li>Evitar que una función se ejecute en cada render.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    ¿Cómo funciona?
                </h2>

                <p className="text-gray-700 mb-4">
                    useMemo recibe dos parámetros:
                </p>

                <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
                    <li>Una función que retorna un valor.</li>
                    <li>Un arreglo de dependencias.</li>
                </ol>

                <p className="text-gray-700 mb-6">
                    El valor solo se recalcula cuando alguna de las dependencias cambia.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Ejemplo de uso
                </h2>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    Es útil cuando necesitas procesar listas grandes, realizar
                    operaciones matemáticas complejas o transformar datos.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Importante
                </h2>

                <p className="text-gray-700 leading-relaxed">
                    No se debe usar useMemo en todos los casos. Solo es recomendable
                    cuando realmente existe un problema de rendimiento.
                </p>

            </div>
        </div>
    );
};

export default UseMemo;