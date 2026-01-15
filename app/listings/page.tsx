import { Suspense } from "react";
import ListingsClient from "./ListingsClient"

export default function ListingsPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading listings...</div>}>
      <ListingsClient />
    </Suspense>
  );
}
