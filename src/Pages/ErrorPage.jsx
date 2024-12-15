import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center">
                <div className="flex items-center justify-center space-x-4">
                    <h1 className="text-9xl font-bold text-gray-800">4</h1>
                    <h1 className="text-9xl font-bold text-blue-500">0</h1>
                    <h1 className="text-9xl font-bold text-gray-800">4</h1>
                </div>
                
                <p className="mt-4 text-xl text-gray-600">
                    {error.statusText || error.message}
                </p>

                <Link 
                    to="/"
                    className="mt-8 inline-block px-6 py-3 text-white text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-400 to-pink-400 hover:from-blue-500 hover:to-pink-500 transition-all duration-200"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}