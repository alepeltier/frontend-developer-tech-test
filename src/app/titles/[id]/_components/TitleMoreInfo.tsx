interface TitleMoreInfoProps<T = any> {
  titleData: T;
}

// TODO - breakdown into components
// TODO - fix types

export default function TitleMoreInfo({ titleData }: TitleMoreInfoProps) {
  return (
    <div className="grid gap-6 mt-10 md:grid-cols-[1.5fr,1fr] md:mt-20 xl:grid-cols-[2fr,1fr]">
      <div>
        <h2 className="text-lg font-semibold mb-4">Plot summary</h2>
        <p className="text-muted-foreground">
          {titleData.plot?.plotText?.plainText}
        </p>
      </div>
      {/* <div>
          <h3 className="text-lg font-semibold mb-4">Crew</h3>
          </div> */}
    </div>
  );
}
