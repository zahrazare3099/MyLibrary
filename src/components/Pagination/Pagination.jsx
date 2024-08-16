import _ from "lodash";
const Pagination = ({ pages, activePage, setPage }) => {
  const prevPage = () => {
    setPage((oldpage) => {
      let prevPage = oldpage - 1;
      if (prevPage < 1) {
        prevPage = pages;
      }
      return prevPage;
    });
  };
  const nextPage = () => {
    setPage((oldpage) => {
      let nextPage = oldpage + 1;
      if (nextPage > pages) {
        nextPage = 1;
      }
      return nextPage;
    });
  };
  return (
    <nav>
      <ul className="flex justify-center w-full  gap-x-2">
        <li>
          <a
            href="#"
            className="text-amber-700 dark:text-amber-950 text-sm font-thin hover:text-amber-800 dark:hover:text-amber-800"
            onClick={nextPage}
          >
            بعدی
          </a>
        </li>
        {/* create number box == pages => data.map*/}
        {/* 1.number of loops 2.run by every loop with index*/}
        {_.times(pages, (index) => (
          <li key={`pagination${index + 1}`}>
            <a
              href="#"
              className={`px-1 border border-amber-700 dark:border-amber-900 rounded ${
                activePage == index + 1
                  ? "bg-amber-700 dark:bg-amber-900 text-white hover:text-white"
                  : "text-amber-700 hover:text-amber-700 dark:text-amber-900"
              }`}
              onClick={() => setPage(index + 1)}
            >
              {index + 1}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="text-amber-700 dark:text-amber-950 text-sm font-thin hover:text-amber-800 dark:hover:text-amber-800"
            onClick={prevPage}
          >
            قبلی
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
