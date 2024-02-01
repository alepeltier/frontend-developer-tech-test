import titleServices from "@/services/titleServices";
import TitleMoreInfo from "./_components/TitleMoreInfo";
import WidthContainer from "@/components/layout/width-container/WidthContainer";
import TitleImage from "./_components/TitleImage";
import TitleBaseInfo from "./_components/TitleBaseInfo";

interface Props {
  params: { id: string };
}

export default async function TitlePage({ params }: Props) {
  const { id } = params;
  const data = await titleServices.getSingleTitle(id, { info: "base_info" });

  if (!data.results) {
    return <p>No results</p>;
  }

  return (
    <div className="mt-8 mb-14 px-6">
      <WidthContainer className="py-4">
        <div className="grid gap-12 md:gap-6 md:grid-cols-[1.5fr,1fr] xl:grid-cols-[2fr,1fr]">
          <TitleImage
            src={data.results.primaryImage?.url}
            alt={data.results.primaryImage?.caption?.plainText}
          />
          <TitleBaseInfo titleData={data.results} />
        </div>
        <TitleMoreInfo titleData={data.results} />
      </WidthContainer>
    </div>
  );
}
