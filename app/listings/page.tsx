import { Container } from "@/components/Container";
import { PropertyCard } from "@/components/PropertyCard";
import { SearchBar } from "@/components/SearchBar";
import { allProperties } from "@/data/properties";
import { SearchResults } from "./search-results";

export default function ListingsPage() {
  return (
    <section className="bg-slate-50">
      <Container className="space-y-10 py-12 md:py-16">
        <header className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            All listings
          </h1>
          <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
            Browse a curated selection of homes across the city. Use filters to
            quickly find properties that match your budget, size, and style.
          </p>
        </header>

        <SearchBar />
        <SearchResults allProperties={allProperties} />
      </Container>
    </section>
  );
}

