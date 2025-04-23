type Props = {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
};

const Pagination = ({ page, totalPages, setPage }: Props) => {
  return (
    <div className="mt-8 flex justify-center items-center gap-4">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          page === 1
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        Prev
      </button>

      <span className="text-gray-700 font-medium">
        Page <span className="text-indigo-600">{page}</span> of {totalPages}
      </span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className={`px-4 py-2 rounded-lg font-medium transition ${
          page === totalPages
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
