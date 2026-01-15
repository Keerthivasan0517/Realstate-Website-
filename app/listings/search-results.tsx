"use client";

import { useSearchParams } from "next/navigation";
import { PropertyCard, type Property } from "@/components/PropertyCard";

interface SearchResultsProps {
  allProperties: (Property & {
    images: string[];
    description: string;
    secondaryDescription: string;
  })[];
}

export function SearchResults({ allProperties }: SearchResultsProps) {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").toLowerCase().trim();

  const filtered =
    query.length === 0
      ? allProperties
      : allProperties.filter((property) => {
          const haystack = `${property.title} ${property.location}`.toLowerCase();
          return haystack.includes(query);
        });

  return (
    <>
      <div className="flex items-center justify-between text-xs text-slate-500">
        <p>
          Showing <span className="font-medium text-slate-800">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "property" : "properties"}
          {query && (
            <>
              {" "}
              for <span className="font-medium text-slate-800">“{query}”</span>
            </>
          )}
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </>
  );
}

