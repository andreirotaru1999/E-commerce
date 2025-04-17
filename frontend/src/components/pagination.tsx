type Props = {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
};

const Pagination = ({ page, totalPages, setPage }: Props) => {
  return (
    <div className="mt-4 flex justify-center gap-2">
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
