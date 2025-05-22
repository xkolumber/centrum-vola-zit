import AdminSponsorId from "@/app/components/AdminComponents/AdminSponsors/AdminSponsorId";
import React from "react";

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  return <AdminSponsorId id={params.id} />;
};

export default Page;
