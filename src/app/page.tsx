import WidthContainer from "@/components/layout/width-container/WidthContainer";
import { TitleList } from "@/components/shared/title-list/TitleList";
import titleServices from "@/services/titleServices";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams?: { page: string };
}) {
  const page = new URLSearchParams(searchParams).get("page");

  const data = await titleServices.getManyTitles({
    page: page ? parseInt(page) : 1,
    list: "top_boxoffice_200",
    limit: 20,
  });

  return (
    <div className="my-8 px-4">
      <WidthContainer>
        <TitleList initialData={data} />
      </WidthContainer>
    </div>
  );
}
