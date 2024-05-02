import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Item from "../../public/item1.jpg";

const CartItem = () => {
  return (
    <div>
      <div className="grid grid-cols-6 items-center gap-[75px] py-[20px] text-slate-700 text-base font-semibold ">
        <p className=" ">Sản Phẩm</p>
        <p className="">Tên Sản Phẩm</p>
        <p className="">Giá</p>
        <p className="">Số Lượng</p>
        <p className="">Tổng cộng</p>
        <p className="">Xóa</p>
      </div>
      <hr className="h-[2px] bg-slate-200 border-0 mt-2" />

      <div>
        <div className="grid grid-cols-6 items-center py-[20px] text-slate-700 text-base font-semibold ">
          <Image className="" src={Item} alt="item1" width={50} height={50} />
          <p className=" ">DÂN CHƠI EMBROIDERED LOGO TEE IN BROWN</p>
          <p className="">price VND</p>
          <button className="">1</button>
          <p className="">price new VND</p>
          <Button className="">Xóa</Button>
        </div>
        <hr className="h-[2px] bg-slate-200 border-0 mt-2" />
      </div>
    </div>
  );
};

export default CartItem;
