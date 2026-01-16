import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { allProperties } from "@/data/properties";

type PropertyDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return allProperties.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyDetailsPage({
  params,
}: PropertyDetailsPageProps) {
  const { id } = await params;

  const property = allProperties.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  return (
    <section className="bg-slate-50">
      <Container className="space-y-8 py-10 md:py-14">
        <Link
          href="/listings"
          className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition hover:text-slate-800"
        >
          <span className="text-sm">←</span>
          Back to listings
        </Link>

        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-rows-[minmax(0,1.2fr)_minmax(0,1fr)]">
              <div className="overflow-hidden rounded-3xl bg-slate-200 shadow-soft">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {property.images.slice(1, 4).map((image, i) => (
                  <div
                    key={`${image}-${i}`}
                    className="overflow-hidden rounded-2xl bg-slate-200"
                  >
                    <img
                      src={image}
                      alt={property.title}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl bg-white p-6 shadow-soft md:sticky md:top-24 md:p-7">
            <div className="space-y-2">
              <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                {property.status}
              </span>
              <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {property.title}
              </h1>
              <p className="text-sm text-slate-500">{property.location}</p>
            </div>

            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Listing price
              </p>
              <p className="text-3xl font-semibold text-slate-900">
                {property.priceFormatted}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 rounded-2xl bg-slate-50 p-4 text-xs text-slate-600 sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-semibold text-slate-900 shadow-sm">
                  {property.beds}
                </span>
                <span className="font-medium text-slate-900">
                  {property.beds} beds
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-semibold text-slate-900 shadow-sm">
                  {property.baths}
                </span>
                <span className="font-medium text-slate-900">
                  {property.baths} baths
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-slate-900 shadow-sm">
                  m²
                </span>
                <span className="font-medium text-slate-900">
                  {property.size} m²
                </span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-600">
              <p>{property.description}</p>
              <p>{property.secondaryDescription}</p>
            </div>

            <div className="space-y-3 rounded-2xl bg-slate-900 px-5 py-4 text-slate-50">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                Arrange a viewing
              </p>
              <p className="text-sm text-slate-200">
                Share your availability and our team will coordinate a private
                tour tailored to your schedule.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-50 px-4 py-2 text-xs font-medium text-slate-900 shadow-soft transition hover:-translate-y-0.5 hover:bg-white"
              >
                Contact an advisor
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
