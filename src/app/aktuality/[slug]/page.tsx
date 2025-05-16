import ActualityPageSlug from "@/app/components/ActualityComponents/ActualityPageSlug";

const Page = ({ params }: { params: { slug: string } }) => {
  return <ActualityPageSlug slug={params.slug} />;
};

export default Page;
