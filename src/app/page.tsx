"use client"

import getBanners from "@/actions/get-banners";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

export default async function Home() {
  const { user } = useUser();
  const route = useRouter();

  if(user?.primaryEmailAddress?.emailAddress==="siamqueen52@gmail.com"){
    route.push('https://dashboard-admin-yammds-projects.vercel.app')
  }else{
    route.push('/')
  }

  const banner = await getBanners("44d501f6-a5b3-46bb-bc09-d33af2b6847e")
  const products = await getProducts({isFeatured: true})
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={banner}/>
      <div className="flex flex-col gap-y-8  px-4 sm:px-6 lg:px-8">
        <ProductList title="Product Unggulan" items={products}/>
      </div>
      </div>
    </Container>
  );
}