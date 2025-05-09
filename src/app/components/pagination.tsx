"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationComponent({ limit }: { limit: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams.get("offset")) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("offset", "0");
      router.push(`?${params.toString()}`);
    }
  }, [searchParams, router]);

  const offset = parseInt(searchParams.get("offset") || "0") || 0;

  const actualPage = offset / 6 + 1;

  const handleBackPage = () => {
    if (actualPage === 1) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("offset", offset - 6 + "");
    router.push(`?${params.toString()}`);
  };

  const handleNextPage = () => {
    if (actualPage >= limit) return;

    const params = new URLSearchParams(searchParams.toString());
    params.set("offset", offset + 6 + "");
    router.push(`?${params.toString()}`);
  };

  return (
    <Pagination className="mx-0 flex w-fit">
      <PaginationContent>
        <PaginationItem className="cursor-pointer" onClick={handleBackPage}>
          <PaginationPrevious />
        </PaginationItem>
        {offset !== 0 && (
          <PaginationItem className="cursor-pointer" onClick={handleBackPage}>
            <PaginationLink>{actualPage - 1}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink isActive>{actualPage}</PaginationLink>
        </PaginationItem>
        {actualPage < limit && (
          <PaginationItem className="cursor-pointer" onClick={handleNextPage}>
            <PaginationLink>{actualPage + 1}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="cursor-pointer" onClick={handleNextPage}>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
