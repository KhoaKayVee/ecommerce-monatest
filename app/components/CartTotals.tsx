import { Button } from "@/components/ui/button";
import React from "react";

const CartTotals = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col">
        <p className="mb-8 text-indigo-600 text-3xl font-bold">Cart Totals</p>
        <div className="flex flex-col gap-5 bg-indigo-300 px-5 py-5 rounded-3xl overflow-hidden">
          <div>
            <div className="flex justify-between">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg font-bold text-indigo-600">550.001 VND</p>
            </div>
            <hr className="h-[2px] bg-slate-200 border-0 mt-2" />
          </div>
          <div>
            <div className="flex justify-between">
              <p className="text-lg">Shipping Fee</p>
              <p className="text-lg font-bold text-indigo-600">Free</p>
            </div>
            <hr className="h-[2px] bg-slate-200 border-0 mt-2" />
          </div>
          <div>
            <div className="flex justify-between">
              <p className="text-2xl font-bold">Total</p>
              <p className="text-lg font-bold text-indigo-600">500.001 VND</p>
            </div>
            <hr className="h-[2px] bg-slate-200 border-0 mt-2" />
          </div>
        </div>
      </div>
      <Button className="mt-8 flex mx-auto bg-indigo-500 px-6 py-2 rounded-full">
        Thanh toán
      </Button>
    </div>
  );
};

export default CartTotals;
