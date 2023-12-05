import DeleteButton from "@/app/components/DeleteButton";
import { getDetailArticle } from "@/blogApi";
import Image from "next/image";
import React from "react";

type Params = {
  id: string;
};

const Article = async ({ params }: { params: Params }) => {
  // const detailArticle = await getDetailArticle(params.id);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/blog/${params.id}`, {
    next: {
      revalidate: 10,
    },
  });
  const detailArticle = await res.json();

  return (
    <div className="p-5 mx-auto max-w-3xl">
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${params.id}`}
        alt=""
        width={1280}
        height={300}
      />
      <h1 className="my-10 text-4xl text-center">{detailArticle.title}</h1>
      <div className="text-lg text-justify leading-relaxed">
        <p>{detailArticle.content}</p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;
