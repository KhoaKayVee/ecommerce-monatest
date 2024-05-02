import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="container mx-auto pt-5 h-[200px] bg-gradient-to-r from-indigo-600 via-indigo-300  to-indigo-400">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-3">
          <p className="text-indigo-700 font-bold text-xl">Information</p>
          <div className="flex flex-col gap-1 text-gray-200">
            <p>Saigon: 173 Huỳnh Văn Bánh - Dist. Phú Nhuận - 0773 648 867</p>
            <p>Hanoi: 974 Đường Láng - Dist. Đống Đa - 0975 190 369</p>
            <p>smakerclothing@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="text-indigo-700 font-bold text-xl">Quick Links</p>
          <div className="flex flex-col gap-1 text-gray-800">
            <p>New Arrivals</p>
            <p>Shop</p>
            <p>News</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <p className="text-indigo-700 font-bold text-xl">Services</p>
          <div className="flex flex-col gap-1 text-gray-800">
            <p>Hướng dẫn mua hàng</p>
            <p>Quy cách đổi hàng</p>
            <p>Quy cách trả hàng</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3 items-center justify-center">
          <div className="text-indigo-700 font-bold text-xl">Follow US On</div>
          <FaFacebook />
          <RiInstagramFill />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
