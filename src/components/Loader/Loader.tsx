const LoaderWithStyles = () => {
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="relative">
        <div className="w-32 h-32 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-semibold tracking-wide text-sm">Shilp Group</span>
        </div>
      </div>
    </div>
  );
};

export default LoaderWithStyles;
