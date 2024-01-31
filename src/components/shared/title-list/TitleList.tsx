"use client";

import { Button } from "@/components/ui/button/Button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { GetManyTitlesResponse } from "@/services/titleServices";
import { TitleCard, TitleImage, TitleCardInfo } from "../title-card/TitleCard";

export interface TitleListPaginationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  next: string | null;
}

const TitleListPagination = ({ next, className }: TitleListPaginationProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  return (
    <div className={cn("w-full flex gap-1 justify-end", className)}>
      <Button
        size="sm"
        variant="outline"
        disabled={!page || page.toString() === "1"}
        asChild
      >
        <Link
          href={`${pathname}${page ? `?page=${parseInt(page) - 1}` : ""}`}
          className={cn({
            "opacity-40 pointer-events-none": !page || page?.toString() === "1",
          })}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Link>
      </Button>
      <Button size="sm" variant="outline" disabled={!next} asChild>
        <Link
          href={`${pathname}${page ? `?page=${parseInt(page) + 1}` : ""}`}
          className={cn({
            "opacity-40 pointer-events-none": !next,
          })}
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
};
TitleListPagination.displayName = "TitleListPagination";

export interface TitleListProps extends React.HTMLAttributes<HTMLDivElement> {
  initialData: GetManyTitlesResponse; // improve types??
}

const TitleList = ({ initialData, className }: TitleListProps) => {
  if (!initialData.results?.length) {
    return (
      <div>
        <p>No results</p>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <TitleListPagination next={initialData.next} page={initialData.page} />
      <div className="grid grid-cols-2 3 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {initialData.results.map((title) => (
          <TitleCard key={title.id} href={`/titles/${title.id}`}>
            <TitleImage
              src={title.primaryImage?.url}
              alt={title.primaryImage?.caption?.plainText}
            />
            <TitleCardInfo
              titleText={title.titleText?.text}
              releaseYear={title.releaseYear?.year}
            />
          </TitleCard>
        ))}
      </div>
      <TitleListPagination next={initialData.next} />
    </div>
  );
};
TitleList.displayName = "TitleList";

export { TitleList, TitleListPagination };
