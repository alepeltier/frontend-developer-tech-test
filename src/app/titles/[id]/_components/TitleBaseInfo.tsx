import { Badge } from "@/components/ui/badge/Badge";
import { secondsToMin } from "@/lib/utils";

// TODO - make more modular
// TODO - fix types either type guards or type casting
interface TitleInfoProps<T = any> {
  titleData: T;
}

export default function TitleBaseInfo({ titleData }: TitleInfoProps) {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">
        {titleData.originalTitleText.text}
      </h1>
      <div className="md:border md:p-6 md:rounded-2xl md:h-fit md:border">
        <div className="grid gap-4">
          <div className="flex gap-4 items-center justify-between">
            <span className="text-sm text-muted-foreground font-semibold">
              Genre
            </span>
            <span className="text-sm font-semibold">
              {titleData.genres.genres[0].text}
            </span>
          </div>

          <div className="flex gap-4 items-center justify-between">
            <span className="text-sm text-muted-foreground font-semibold">
              Rating
            </span>
            <span className="text-sm font-semibold">
              {titleData?.ratingsSummary.aggregateRating}/10
            </span>
          </div>

          <div className="flex gap-4 items-center justify-between">
            <span className="text-sm text-muted-foreground font-semibold">
              Release Year
            </span>
            <span className="text-sm font-semibold">
              {titleData.releaseYear.year}
            </span>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <span className="text-sm text-muted-foreground font-semibold">
              Runtime{" "}
            </span>
            <span className="text-sm font-semibold">
              {secondsToMin(titleData.runtime?.seconds || 0)}min
            </span>
          </div>

          {titleData.meterRanking?.currentRank ? (
            <div className="flex gap-4 items-center justify-between">
              <span className="text-sm text-muted-foreground font-semibold">
                Popularity{" "}
              </span>
              <span className="text-sm font-semibold">
                {titleData.meterRanking?.currentRank}
              </span>
            </div>
          ) : null}
          <hr className="h-px my-4 flex-1 bg-border"></hr>
          <div className="">
            <span className="block text-muted-foreground font-semibold mb-3">
              All Genres
            </span>
            <div className="flex flex-wrap gap-2">
              {titleData.genres.genres.map(
                (genre: TitleGenre, index: number) => (
                  <Badge
                    variant="secondary"
                    className="py-2 px-4"
                    key={`${genre.id}-${index}`}
                  >
                    {genre.text}
                  </Badge>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
