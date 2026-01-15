"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { allProperties } from "@/data/properties";

export default function ListingsClient() {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");

  const filteredProperties = status
    ? allProperties.filter((p) => p.status === status)
    : allProperties;

  return (
    <section className="bg-slate-50">
      <Container className="space-y-8 py-10 md:py-14">
        <h1 className="text-2xl font-semibold text-slate-900">
          Property Listings
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProperties.map((property) => (
            <Link
              key={property.id}
              href={`/listings/${property.id}`}
              className="block rounded-3xl bg-white p-4 shadow-soft transition hover:-translate-y-1"
            >
              <img
                src={property.images[0]}
                alt={property.title}
                className="h-48 w-full rounded-2xl object-cover"
              />
              <div className="mt-4 space-y-1">
                <h2 className="text-lg font-semibold text-slate-900">
                  {property.title}
                </h2>
                <p className="text-sm text-slate-500">
                  {property.location}
                </p>
                <p className="font-medium text-slate-900">
                  {property.priceFormatted}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
