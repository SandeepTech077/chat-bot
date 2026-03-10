import { Link } from "react-router-dom";
import ErrorSvg from "../../public/error.svg"; // Adjust path as necessary

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-4 lg:px-16">
      {/* Left Content: 1/3 */}
      <div className="w-full md:w-1/3 text-center md:text-left mb-8 md:mb-0">
        <h2 className="text-[50px] font-bold text-[#727272] mb-2">Oops!</h2>
        <h2 className="text-[50px] font-bold text-[#727272] mb-2">ERROR</h2>
        <h1 className="text-black text-[150px] font-bold mb-6">404</h1>
        <Link
          to="/"
          className="inline-block px-6 py-3 text-black rounded-lg border border-gray-400"
        >
          Go back home
        </Link>
      </div>

      {/* Right Image: 2/3 */}
      <div className="w-full md:w-2/3 flex justify-center">
        <img
          src={ErrorSvg}
          alt="404 Error"
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default NotFound;
