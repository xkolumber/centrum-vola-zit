import AdminCooperatonId from "@/app/components/AdminComponents/AdminCooperation/AdminCooperationId";
import React from "react";

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  return <AdminCooperatonId id={params.id} />;
};

export default Page;
