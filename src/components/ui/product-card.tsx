"use client";

import React, { useState } from "react";
import { Product } from "../../../types";
import Image from "next/image";
import { Button } from "./button";
import { Expand } from "lucide-react";
import Currency from "./currecy";
import { useRouter } from "next/navigation";
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogTitle, 
  DialogDescription 
} from "./dialog";

interface ProductCardProps {
  data: Product;
}

export default function ProductCard({ data }: ProductCardProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  return (
    <div 
      onClick={handleClick} 
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 shadow-sm hover:shadow-md transition"
    >
      {/* Gambar Produk */}
      <div className="aspect-square rounded-xl bg-gray-100 relative overflow-hidden">
        <Image
          alt="image"
          src={data?.images?.[0]?.url}
          key={data?.images?.[0]?.id}
          fill
          className="object-cover rounded-md"
        />
        {/* Tombol Expand di Tengah Bawah */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                className="bg-white/80 backdrop-blur-md rounded-full p-2 shadow hover:bg-white transition"
                onClick={(e) => { 
                  e.stopPropagation(); // Mencegah klik ke parent div 
                  setIsOpen(true); 
                }}
              >
                <Expand className="w-6 h-6 text-gray-700" />
              </Button>
            </DialogTrigger>
            {/* Modal / Preview */}
            <DialogContent className="max-w-md p-6 rounded-lg shadow-lg bg-white">
              <DialogTitle className="text-xl font-semibold text-gray-800">{data.name}</DialogTitle>
              <DialogDescription className="text-gray-500 text-sm">
                {data.category?.name} - Harga: <Currency value={Number(data.price)} />
              </DialogDescription>
              <div className="w-full flex justify-center mt-4">
                <Image
                  alt="Preview"
                  src={data?.images?.[0]?.url}
                  width={280}
                  height={280}
                  className="rounded-lg shadow-md"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      {/* Deskripsi Produk */}
      <div>
        <p className="font-semibold text-lg text-gray-900">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Harga */}
      <div className="flex items-center justify-between">
        <Currency value={Number(data.price)} />
      </div>
    </div>
  );
}
