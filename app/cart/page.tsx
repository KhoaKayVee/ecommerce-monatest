import React from "react";
import CartItem from "../components/CartItem";
import CartTotals from "../components/CartTotals";

const page = () => {
  return (
    <div className="container mx-auto h-[120vh] mt-36">
      <CartItem />
      <CartTotals />
    </div>
  );
};

export default page;
