"use client";

import React, { useEffect, useState } from "react";
import { request } from "graphql-request";
import { document } from "@/api/api";
import Image from "next/image";
import Item1 from "../../public/item1.jpg";
import { IoStarSharp } from "react-icons/io5";

const Popular = () => {
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    return await request("https://retail-api.mona.website/graphql", document);
  };
  useEffect(() => {
    fetchData().then((res: any) => setDatas(res.getProducts.products));
  }, []);
  console.log(datas);

  return (
    <div className="container mx-auto min-h-screen mt-8">
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="font-bold text-indigo-600 text-4xl">POPULAR ITEM</p>
        <hr className="w-[200px] h-[6px] rounded-[10px] bg-gray-900" />
      </div>
      <div className="grid grid-cols-4 w-full items-center text-center gap-20 mt-8 ">
        <div className="flex flex-col gap-3">
          <Image
            src={Item1}
            alt="item1"
            className="object-contain w-[300px] h-[200px] "
          />
          <p className="text-lg text-gray-800 font-semibold">
            DÂN CHƠI EMBROIDERED LOGO TEE IN BROWN
          </p>
          <div className="flex justify-between">
            <div className="text-indigo-600 font-bold">550.000 VND</div>
            <div className="flex items-center gap-2">
              <p>5.0</p>
              <div className="flex">
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Image
            src={Item1}
            alt="item1"
            className="object-contain w-[300px] h-[200px] "
          />
          <p className="text-lg text-gray-800 font-semibold">
            DÂN CHƠI EMBROIDERED LOGO TEE IN BROWN
          </p>
          <div className="flex justify-between">
            <div className="text-indigo-600 font-bold">550.000 VND</div>
            <div className="flex items-center gap-2">
              <p>5.0</p>
              <div className="flex">
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Image
            src={Item1}
            alt="item1"
            className="object-contain w-[300px] h-[200px] "
          />
          <p className="text-lg text-gray-800 font-semibold">
            DÂN CHƠI EMBROIDERED LOGO TEE IN BROWN
          </p>
          <div className="flex justify-between">
            <div className="text-indigo-600 font-bold">550.000 VND</div>
            <div className="flex items-center gap-2">
              <p>5.0</p>
              <div className="flex">
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Image
            src={Item1}
            alt="item1"
            className="object-contain w-[300px] h-[200px] "
          />
          <p className="text-lg text-gray-800 font-semibold">
            DÂN CHƠI EMBROIDERED LOGO TEE IN BROWN
          </p>
          <div className="flex justify-between">
            <div className="text-indigo-600 font-bold">550.000 VND</div>
            <div className="flex items-center gap-2">
              <p>5.0</p>
              <div className="flex">
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
                <IoStarSharp fill="gold" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
