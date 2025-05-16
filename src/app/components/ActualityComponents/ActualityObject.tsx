import React from "react";
import { ActualityInterface } from "../../lib/interface";
import Link from "next/link";

interface Props {
  data: ActualityInterface;
}

const ActualityObject = ({ data }: Props) => {
  return (
    <Link className="flex flex-row" href={`/aktuality/${data.slug}`}>
      <div className="flex-col">
        <h3 className="font-semibold">{data.title}</h3>

        {data?.text1 && (
          <div
            className="w-full dark line-clamp-2 "
            dangerouslySetInnerHTML={{
              __html: data?.text1,
            }}
          />
        )}
      </div>

      <p></p>
    </Link>
  );
};

export default ActualityObject;
