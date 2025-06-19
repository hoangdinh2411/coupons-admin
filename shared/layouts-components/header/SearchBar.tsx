import React, { useEffect, useRef, useState } from 'react';
import { ListGroup } from 'react-bootstrap';

type Props = {};

export default function SearchBar({}: Props) {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const searchResultRef = useRef<HTMLDivElement | null>(null);
  const [showa, setShowa] = useState(false);
  useEffect(() => {
    const clickHandler = (event) => {
      if (
        searchResultRef.current &&
        !searchResultRef.current.contains(event.target)
      ) {
        searchResultRef.current.classList.add('d-none');
      }
    };

    document.addEventListener('click', clickHandler);

    return () => {
      document.removeEventListener('click', clickHandler);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="header-element header-search d-lg-block d-none my-auto auto-complete-search"
    >
      {/* <!-- Start::header-link --> */}

      <input
        type="text"
        className="header-search-bar form-control rounded-pill"
        onClick={() => {}}
        ref={searchRef}
        id="header-search"
        placeholder="Search for Results..."
        spellCheck={false}
        autoComplete="off"
        autoCapitalize="off"
      />
      <a href="javascript:void(0);" className="header-search-icon border-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#5f6368"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </a>
      {/* {showa && (
                <div
                  className="card search-result position-absolute z-index-9 search-fix  border mt-1"
                  ref={searchResultRef}
                >
                  <div className="card-header">
                    <div className="card-title mb-0 text-break">Search result of </div>
                  </div>
                  <div className="card-body overflow-auto">
                    <ListGroup className="m-2">
                    </ListGroup>
                  </div>
                  
                </div>
              )} */}
    </div>
  );
}
