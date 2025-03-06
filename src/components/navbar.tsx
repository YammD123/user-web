import React from "react";
import Container from "./ui/container";
import Link from "next/link";
import MainNavbar from "./main-nav";
import getCategories from "@/actions/get-categories";

export const revalidate = 0


export default async function Navbar() {

    const categories = await getCategories()
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link className="ml-4 flex lg:ml-8 gap-x-2" href={"/"}>
            <p className="font-bold text-2xl">TOKO</p>
          </Link>
          <MainNavbar data={categories} />
        </div>
      </Container>
    </div>
  );
}
