"use client";

import { cn } from "@/lib/utils";
import { GetManyTitlesResponse } from "@/services/titleServices";
import { TitleCard, TitleImage, TitleCardInfo } from "../title-card/TitleCard";

export interface TitleListPaginationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  next: string | null;
  page: string;
}

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
    </div>
  );
};
TitleList.displayName = "TitleList";

export { TitleList };
