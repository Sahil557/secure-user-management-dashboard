const Loader: React.FC = () => {
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
      <div className="flex justify-center items-center mt-[50vh]">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500" />
        <img
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          className="rounded-full h-28 w-28"
          alt="loader snap"
        />
      </div>
    </div>
  );
};

export default Loader;
