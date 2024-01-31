import WidthContainer from "@/components/layout/width-container/WidthContainer";
import titleServices from "@/services/titleServices";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = new URLSearchParams(searchParams).get("page");

  const data = await titleServices.getManyTitles({
    page: page ? parseInt(page) : 1,
    list: "top_boxoffice_200",
    limit: 20,
  });

  console.log("data", data);

  return (
    <div className="bg-amber-500">
      <WidthContainer>
        <p>Home</p>
      </WidthContainer>
    </div>
  );
}
