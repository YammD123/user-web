import getBanners from "@/actions/get-banners";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Image from "next/image";

export const revalidate = 0

export default async function Home() {

  const banner = await getBanners("97fff951-a2b6-4a91-9bdb-4f71747d7182")
  const products = await getProducts({isFeatured: true})
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={banner}/>
      </div>
      <div className="flex flex-col gap-y-8  px-4 sm:px-6 lg:px-8">
        <ProductList title="Product Unggulan" item={products}/>
      </div>
    </Container>
  );
}