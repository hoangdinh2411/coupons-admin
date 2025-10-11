'use client';
import { LIMIT_DEFAULT } from '@/constants/variants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useMemo } from 'react';
import { Pagination } from 'react-bootstrap';

type Props = {
  total: number;
  currentPage: number;
};

export default function CustomPagination({ total, currentPage }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Calculate total number of pages
  const totalPages = Math.ceil(total / LIMIT_DEFAULT);

  /**
   * Clean up empty query parameters in the URL
   * Example: ?page=2&search= → becomes ?page=2
   */
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    let hasChange = false;

    for (const [key, value] of params.entries()) {
      if (value === '') {
        params.delete(key);
        hasChange = true;
      }
    }

    // Replace the current URL without reloading if changes were made
    if (hasChange) {
      const newUrl = `${pathname}?${params.toString()}`;
      router.replace(newUrl, { scroll: false });
    }
  }, [pathname, searchParams, router]);

  /**
   * Handle page change when user clicks on a pagination item
   * Keeps existing query parameters intact while updating the "page" param
   */
  const handleChangePage = (selectedPage: number) => {
    if (selectedPage < 1 || selectedPage > totalPages) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set('page', selectedPage.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  /**
   * Compute which page numbers should be visible.
   * Always show:
   * - First 2 pages
   * - Last 2 pages
   * - Current page ± 1
   * Add "..." (ellipsis) where there are gaps.
   */
  const visiblePages = useMemo(() => {
    // If few pages, show all
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [];

    // Always show first two pages
    pages.push(1, 2);

    // Add ellipsis if current page is far from start
    if (currentPage > 4) pages.push('...');

    // Add middle section (around current page)
    const start = Math.max(3, currentPage - 1);
    const end = Math.min(totalPages - 2, currentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);

    // Add ellipsis if current page is far from end
    if (currentPage < totalPages - 3) pages.push('...');

    // Always show last two pages
    pages.push(totalPages - 1, totalPages);

    return pages;
  }, [currentPage, totalPages]);

  // Hide pagination if there's only one page
  if (totalPages <= 1) return null;

  return (
    <Pagination className="mb-0 d-flex justify-content-center mt-3">
      {/* Previous page button */}
      <Pagination.Prev
        disabled={currentPage === 1}
        onClick={() => handleChangePage(currentPage - 1)}
      />

      {/* Render visible page numbers */}
      {visiblePages.map((page, index) =>
        page === '...' ? (
          // Render ellipsis when skipping page ranges
          <Pagination.Ellipsis key={`ellipsis-${index}`} disabled />
        ) : (
          // Render regular page number
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => handleChangePage(page as number)}
          >
            {page}
          </Pagination.Item>
        )
      )}

      {/* Next page button */}
      <Pagination.Next
        disabled={currentPage === totalPages}
        onClick={() => handleChangePage(currentPage + 1)}
      />
    </Pagination>
  );
}
