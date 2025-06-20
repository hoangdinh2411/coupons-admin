'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { KeyboardEvent, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

type Props = {};

export default function SearchBar({}: Props) {
  const [text, setText] = useState<string>('');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('search_text', text.toString());
    router.push(`${pathname}?${params.toString()}`);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const params = new URLSearchParams(searchParams.toString());
      params.set('search_text', text.toString());
      router.push(`${pathname}?${params.toString()}`);
    }
  };

  return (
    <InputGroup style={{ flex: 1, minWidth: '300px', marginLeft: 0 }}>
      <Form.Control
        placeholder="Search categories by name..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button variant="primary" id="button-search" onClick={handleSearch}>
        <i className="ri-search-line"></i>
      </Button>
    </InputGroup>
  );
}
