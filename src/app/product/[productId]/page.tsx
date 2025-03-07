
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Galery from "@/components/gambar/galery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import React from "react";
interface ProductPageProps {
  params: { productId: string };
}
export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);
  const suggestedProd = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}
            <Galery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
            <hr className="my-10" />
            <ProductList title="Produk Terkait" items={suggestedProd} />
        </div>
      </Container>
    </div>
  );
}
