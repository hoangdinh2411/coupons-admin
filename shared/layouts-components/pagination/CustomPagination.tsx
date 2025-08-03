'use client';
import { LIMIT_DEFAULT } from '@/constants/variants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';
import { Pagination } from 'react-bootstrap';

type Props = {
  total: number;
  currentPage: number;
};

export default function CustomPagination({ total, currentPage }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    let hasChange = false;
    for (const [key, value] of params.entries()) {
      if (value === '') {
        params.delete(key);
        hasChange = true;
      }
    }
    if (hasChange) {
      const newUrl = `${pathname}?${params.toString()}`;
      router.replace(newUrl, { scroll: false });
    }
  }, [pathname, searchParams]);
  const pagination =
    total && total > LIMIT_DEFAULT
      ? [...Array(Math.ceil(total / LIMIT_DEFAULT))].map((_, i) => i + 1)
      : [1];
  const handleChangePage = (selectedPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', selectedPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const lastPage = pagination[pagination.length - 1]
  return (
    <Pagination className="mb-0">
      <Pagination.Item
        disabled={currentPage === 1}
        onClick={() => handleChangePage(currentPage - 1)}
      >
        Prev
      </Pagination.Item>
      {pagination.map((number) => (
        <Pagination.Item
          key={number}
          active={number === currentPage}
          onClick={() => handleChangePage(number)}
        >
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Item
        disabled={currentPage === lastPage}
        onClick={() => handleChangePage(currentPage + 1)}
      >
        Next
      </Pagination.Item>
    </Pagination>
  );
}
