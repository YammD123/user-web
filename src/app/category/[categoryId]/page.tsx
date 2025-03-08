import getCategory from "@/actions/get-category";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import Container from "@/components/ui/container";
import NoResult from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";
import React from "react";

interface pageProps {
  params: {
    categoryId: string;
  };
}

export default async function page({ params }: pageProps) {
  const products = await getProducts({
    categoryId: params.categoryId,
  });

  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-white">
      <Container>
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
          <div
            className="rounded-xl relative aspect-[2.4/1] overflow-hidden bg-cover"
            style={{ backgroundImage: `url('/backg.jpg')` }}
          >
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                Selamat Datang
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pb-8">
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            {products.length === 0 && <NoResult />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
