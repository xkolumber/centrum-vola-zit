import AdminActualityCertainObject from "@/app/components/AdminComponents/AdminActualityCertainObject";

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  return <AdminActualityCertainObject id={params.id} />;
};

export default Page;
