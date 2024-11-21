// use tailwind to add a loading spinner
function Loading() {
  return (
    // <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
    // </div>
  );
}

export default Loading;