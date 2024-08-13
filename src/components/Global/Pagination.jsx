import React, { useEffect, useState } from 'react';

const Pagination = ({page, totalPages, rowsPerPage, onPageChange, selectedFilter }) => {
  console.log("🚀 ~ Pagination ~ totalPages:", totalPages)
  console.log("🚀 ~ Pagination ~ page:", page)
  
  const handlePageClick = (pageNumber) => {
    console.log("🚀 ~ handlePageClick ~ pageNumber:", pageNumber)
    onPageChange(pageNumber, rowsPerPage, selectedFilter);
  };

  useEffect(() => {
    // setActivePage(1);
  }, [totalPages, rowsPerPage]);

  return (
    <div className="flex items-center gap-4">
      <button
        disabled={+page === 1} 
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={() => handlePageClick(+page - 1)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          aria-hidden="true" className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
        </svg>
        Previous
      </button>
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index + 1}
            className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase ${index+1 === +page ? 'bg-[#64B5AC] text-white' : 'text-[#64B5AC]'} transition-all hover:bg-[#64B5AC] hover:text-white active:bg-[#64B5AC] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            type="button"
            onClick={() => handlePageClick(index + 1)}
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {index + 1}
            </span>
          </button>
        ))}
      </div>
      <button
        disabled={+page === totalPages} 
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
        onClick={() => handlePageClick(+page + 1)}
      >
        Next
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          aria-hidden="true" className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
