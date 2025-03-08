import { NextRequest, NextResponse } from "next/server";
import midtransClient from "midtrans-client";

export async function POST(req: NextRequest) {
  const { orderId, price } = await req.json(); // <- Ini penting
  
  if (!orderId || !price) {
    return NextResponse.json({ error: "Order ID atau Harga Kosong" });
  }

  let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY!,
  });

  let parameter = {
    transaction_details: {
      order_id: orderId,
      gross_amount: price,
    },
  };

  try {
    const transaction = await snap.createTransaction(parameter);
    return NextResponse.json({ token: transaction.token });
  } catch (error) {
    console.log(error); // <- Tambahin biar ketahuan errornya di console
    return NextResponse.json({ error: "Gagal membuat transaksi" });
  }
}
