import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-6">
                <ul className="flex flex-wrap gap-4 py-4 text-white font-medium justify-center">
                    
                    <li>
                        <Link className="hover:text-blue-400 transition" to="/Inicio">
                            Inicio
                        </Link>
                    </li>

                    <li>
                        <Link className="hover:text-blue-400 transition" to="/useCallback">
                            useCallback
                        </Link>
                    </li>

                    <li>
                        <Link className="hover:text-blue-400 transition" to="/useEffect">
                            useEffect
                        </Link>
                    </li>

                    <li>
                        <Link className="hover:text-blue-400 transition" to="/useContext">
                            useContext
                        </Link>
                    </li>

                    <li>
                        <Link className="hover:text-blue-400 transition" to="/useRef">
                            useRef
                        </Link>
                    </li>

                    <li>
                        <Link className="hover:text-blue-400 transition" to="/useMemo">
                            useMemo
                        </Link>
                    </li>

                    <li>
                        <Link className="hover:text-blue-400 transition" to="/useReducer">
                            useReducer
                        </Link>
                    </li>

                    <li>
                        <Link className="hover:text-blue-400 transition" to="/useState">
                            useState
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;