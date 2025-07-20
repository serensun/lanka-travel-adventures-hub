
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">404</h1>
        <p className="text-xl text-blue-700 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-600 hover:text-blue-800 underline font-medium">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
