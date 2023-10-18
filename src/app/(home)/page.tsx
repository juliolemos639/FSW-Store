"use client";

import Image from "next/image";
import Categories from "./components/categories";

// Notion

// https://narrow-beach-a00.notion.site/Primeira-Aula-9d64b6a7fbe84ebb90ebc6498a00000f

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/Banner-home-01.png"
        alt="Até 55% de desconto esse mês"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
      />
      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
}
