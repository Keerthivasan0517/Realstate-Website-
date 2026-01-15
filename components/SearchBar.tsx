"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from "./Container";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = query.trim();

    const params = new URLSearchParams(searchParams.toString());
    if (trimmed) {
      params.set("q", trimmed);
    } else {
      params.delete("q");
    }

    router.push(`/listings?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-3xl bg-white p-1.5 shadow-soft shadow-slate-900/5 ring-1 ring-slate-100"
    >
      <div className="flex items-center gap-2 rounded-[1.4rem] bg-slate-50 px-3 py-2.5 sm:px-4">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-2xl bg-white text-xs text-slate-500 shadow-sm">
          🔍
        </span>
        <div className="flex-1">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by neighborhood, city, or property name"
            className="w-full border-none bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-slate-50 shadow-sm transition hover:-translate-y-0.5 hover:bg-black hover:shadow-md"
        >
          Search
        </button>
      </div>
      <p className="px-4 pb-1 pt-1 text-[10px] text-slate-400 sm:text-[11px]">
        Client-side demo search · filters listings using the search term in the
        URL.
      </p>
    </form>
  );
}

