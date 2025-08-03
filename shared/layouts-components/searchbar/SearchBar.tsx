'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { KeyboardEvent, useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

type Props = {
  placeholder: string;
};

export default function SearchBar({ placeholder }: Props) {
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

  useEffect(() => {
    const search_text = searchParams.get('search_text') || '';
    if (text) {
      setText(search_text);
    }
  }, [pathname, searchParams]);

  return (
    <InputGroup style={{ flex: 1, minWidth: '300px', marginLeft: 0 }}>
      <Form.Control
        placeholder={placeholder}
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
