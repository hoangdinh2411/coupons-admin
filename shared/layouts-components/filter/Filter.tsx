'use client';
import { couponStatus } from '@/helper/coupons';
import UseAppStore from '@/store/useAppStore';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { Accordion, Button, Dropdown, Form } from 'react-bootstrap';

type Props = {
  byCategory?: boolean;
  byStore?: boolean;
  byStatus?: boolean;
};

const defaultValue = {
  categories: [],
  stores: [],
  status: [...couponStatus.map((s) => s.status)],
};
export default function Filter({
  byCategory = false,
  byStore = false,
  byStatus = false,
}: Props) {
  const { categories, stores } = UseAppStore((state) => state);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [filter, setFilter] = useState<{
    categories: number[];
    stores: number[];
    status: number[];
  }>(defaultValue);

  const handleSelectCategory = (selected: number) => {
    setFilter((prev) => ({
      ...prev,
      categories: !prev.categories.includes(selected)
        ? [...prev.categories, selected]
        : prev.categories.filter((i) => i !== selected),
    }));
  };
  const handleSelectStories = (selected: number) => {
    setFilter((prev) => ({
      ...prev,
      stores: !prev.stores.includes(selected)
        ? [...prev.stores, selected]
        : prev.stores.filter((i) => i !== selected),
    }));
  };
  const handleSelectStatus = (selected: number) => {
    setFilter((prev) => ({
      ...prev,
      status: !prev.status.includes(selected)
        ? [...prev.status, selected]
        : prev.status.filter((i) => i !== selected),
    }));
  };

  const handleClear = () => {
    setFilter(defaultValue);
    router.push(pathname);
  };

  const handleFilter = () => {
    const params = new URLSearchParams(searchParams.toString());
    (Object.keys(filter) as Array<keyof typeof filter>).forEach((k) => {
      params.set(k, filter[k].join(','));
    });

    router.push(`${pathname}?${params.toString()}`);
  };

  if (!byCategory && !byCategory && !byStatus) {
    return null;
  }
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Filter</Accordion.Header>
        <Accordion.Body className="d-flex gap-3">
          {/* category */}
          {byCategory && (
            <Dropdown autoClose="outside">
              <Dropdown.Toggle variant="light">Select category</Dropdown.Toggle>

              <Dropdown.Menu className="px-2 py-2">
                {categories.map((opt) => (
                  <Form.Check
                    className="py-2 "
                    key={opt.id}
                    type="checkbox"
                    id={opt.id.toString()}
                    label={opt.name}
                    checked={filter.categories.includes(opt.id)}
                    onChange={() => handleSelectCategory(opt.id)}
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
          {/* Store */}

          {byStore && (
            <Dropdown title="Select category" autoClose="outside">
              <Dropdown.Toggle variant="light">Select stores</Dropdown.Toggle>

              <Dropdown.Menu className="px-2 py-2">
                {stores.map((opt) => (
                  <Form.Check
                    className="py-2 "
                    key={opt.id}
                    type="checkbox"
                    id={opt.id.toString()}
                    label={opt.name}
                    checked={filter.stores.includes(opt.id)}
                    onChange={() => handleSelectStories(opt.id)}
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}

          {/* Status */}
          {byStatus && (
            <Dropdown title="Select category" autoClose="outside">
              <Dropdown.Toggle variant="light">Select status</Dropdown.Toggle>

              <Dropdown.Menu className="px-2 py-2">
                {couponStatus.map((opt, idx) => (
                  <Form.Check
                    className="py-2 "
                    key={idx}
                    type="checkbox"
                    id={opt.status.toString()}
                    label={opt.label}
                    checked={filter.status.includes(opt.status)}
                    onChange={() => handleSelectStatus(opt.status)}
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
          <Button onClick={handleFilter}>Filter</Button>
          <Button variant="info" onClick={handleClear}>
            Clear
          </Button>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
