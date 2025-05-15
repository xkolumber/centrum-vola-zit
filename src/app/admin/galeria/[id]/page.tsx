import AdminGalleryCertainAlbum from "@/app/components/AdminComponents/AdminGalleryCertainAlbum";

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  return <AdminGalleryCertainAlbum id={params.id} />;
};

export default Page;
