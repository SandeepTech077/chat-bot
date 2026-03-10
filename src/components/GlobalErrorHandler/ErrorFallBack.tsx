import { TbFaceIdError } from 'react-icons/tb';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary?: () => void;
}

const ErrorFallback = ({ error } : ErrorFallbackProps) => {
  return (
    <div className="p-8 text-center h-screen content-center">
      <div className='flex flex-col justify-center items-center'>
      <TbFaceIdError size={100} color='red'/>
      <h2 className="text-2xl font-bold text-red-600 my-auto">
        Oops! Something went wrong.
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        {error.message}
      </p>
      </div>
    </div>
  );
};

export default ErrorFallback;
