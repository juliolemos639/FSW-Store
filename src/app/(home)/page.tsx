import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

// Notion

// https://narrow-beach-a00.notion.site/Primeira-Aula-9d64b6a7fbe84ebb90ebc6498a00000f

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <div>
      <Image
        src="/Banner-home-01.png"
        alt="Até 55% de desconto esse mês"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
      />
      <div className="mt-8 px-5">
        <Categories />
      </div>
      <div className="mt-8">
        <p className="mb-3 pl-5 font-bold uppercase">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <Image
        src="/Banner-home-02.png"
        alt="Até 55% de desconto em mouses"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
      />
    </div>
  );
}
