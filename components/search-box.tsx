"use client";

import type React from "react";
import { useState } from "react";
import styled from "styled-components";
import { colors } from "@/lib/styled-components";
import { useRouter } from 'next/navigation';

interface SearchBoxProps {
  initialQuery?: string;
  placeholder?: string;
  className?: string;
}

const FormWrapper = styled.form`
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${colors.mutedForeground}
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  background-color: ${colors.card};
  border: 1px solid ${colors.border};
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: transparent;
  }

  &::placeholder {
    color: ${colors.mutedForeground};
  }
`;

const SubmitButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.375rem 1rem;
  background-color: ${colors.primary};
  color: ${colors.primaryForeground};
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.primaryHover};
  }

  &:active {
    transform: translateY(calc(-50% + 1px));
  }
`

export default function SearchBox({
  initialQuery = "",
  placeholder = "搜索文章...",
  className = "",
}: SearchBoxProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <FormWrapper onSubmit={handleSubmit} className={ className}>
      <InputWrapper>
        <SearchIconWrapper>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </SearchIconWrapper>
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
        ></SearchInput>
        <SubmitButton type="submit">搜索</SubmitButton>
      </InputWrapper>
    </FormWrapper>
  );
}
