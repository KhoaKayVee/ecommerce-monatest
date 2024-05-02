import React from "react";
import Logo from "../../public/Logo-ecommerce.png";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { IoCartOutline } from "react-icons/io5";
import SearchInput from "./SearchInput";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="absolute mt-6 top-0 container mx-auto z-50 ">
      <div className=" z-50 flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width={50}
            height={20}
            className="hover:scale-105 hover:duration-700 transition-all"
          />
        </Link>

        <ul className="flex items-center gap-4 text-lg font-bold text-indigo-800 ">
          <Link
            className="hover:text-indigo-200 transition-all duration-700 hover:scale-105"
            href="/"
          >
            Cửa hàng
          </Link>
          <Link
            className="hover:text-indigo-200 transition-all duration-700 hover:scale-105"
            href="/"
          >
            T-Shirts
          </Link>
          <Link
            className="hover:text-indigo-200 transition-all duration-700 hover:scale-105"
            href="/"
          >
            Shirt
          </Link>
          <Link
            className="hover:text-indigo-200 transition-all duration-700 hover:scale-105"
            href="/"
          >
            Outwear
          </Link>
        </ul>

        <SearchInput />

        <Link href="/cart" className="flex">
          <Button className="flex items-center gap-4 py-4 px-4 rounded-full bg-indigo-600 hover:bg-indigo-400 transition-all duration-700 hover:text-indigo-800 hover:scale-105">
            Add to Cart
            <IoCartOutline size={40} />
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
