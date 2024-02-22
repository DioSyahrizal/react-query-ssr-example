import { getPosts } from "@/utils/post.api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ListPost = () => {
  const { data } = useQuery({ queryKey: ["posts"], queryFn: getPosts });

  return (
    <div className="border border-white p-6 my-3">
      <pre className="break-all w-[700px] !important whitespace-pre-wrap">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default ListPost;
