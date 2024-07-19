// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: number;
  data: any;
  // data: {
  //   id: number;
  //   name: string;
  //   price: number;
  //   size: string;
  // }[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await retrieveData("product");
  // const data = [
  //   {
  //     id: 1,
  //     name: "Baju Baru",
  //     price: 500000,
  //     size: "XL",
  //   },
  //   {
  //     id: 2,
  //     name: "Baju Lama",
  //     price: 100000,
  //     size: "XL",
  //   },
  // ];
  res.status(200).json({ status: true, statusCode: 200, data });
}
