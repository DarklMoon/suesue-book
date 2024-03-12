"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BookComp from "../book/BookComp";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { float } from "aws-sdk/clients/frauddetector";

type Book = {
  book_id?: string;
  book_title?: string;
  book_author?: string;
  book_info?: string;
  book_image?: string;
  book_price?: float;
  category_name?: string;
  book_quantity?: string;
  book_seller?: string;
};

type User = {
  // Define the user object structure here
  email: string;
  username?: string;
  user_id?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  role?: string;
  user_img?: string;
  // Add other user properties as needed
};
interface ProfileProps {
  user: User;
  data: Book[];
}

const mockData: Book[] = [
  {
    book_id: "1",
    book_title: "one punch",
    book_author: "ยูสุเกะ มุราตะ, ONE",
    book_info:
      "บนโลกเหนือสิ่งมหัศจรรย์สัตว์ประหลาดและอสูรร้ายได้สร้างความหายนะในเมืองต่างๆ เพื่อต่อสู้ต่อกรกับพวกมัน จึงได้มีการก่อตั้งสมาคมฮีโร่เพื่อหยุดยั้งพวกเขา ไซตามะวีรบุรุษที่ไม่เกี่ยวข้องจากฟากฟ้าของเมือง Z ได้ทำในสิ่งที่กล้าหาญความฝันในวัยเด็กและความบันเทิงของตัวเขา เขาฝึกฝนตัวเองจนถึง3ปีทำให้เขาสามารถเอาชนะคู่ต่อสู้ได้อย่างง่ายดายด้วยเพียงหมัดเดียว จากความสนุกและความบันเทิงกลับกลายเป็นความเบื่อหน่ายกับพลังอำนาจทุกอย่างอันเกินขีดจำกัดของเขาเอง",
    book_image: "https://test-cloudbased.s3.amazonaws.com/one_piece.png",
    book_price: 100.0,
    category_name: "Manga",
    book_quantity: "1",
    book_seller: "2",
  },
  {
    book_id: "2",
    book_title: "one punch",
    book_author: "ยูสุเกะ มุราตะ, ONE",
    book_info:
      "บนโลกเหนือสิ่งมหัศจรรย์สัตว์ประหลาดและอสูรร้ายได้สร้างความหายนะในเมืองต่างๆ เพื่อต่อสู้ต่อกรกับพวกมัน จึงได้มีการก่อตั้งสมาคมฮีโร่เพื่อหยุดยั้งพวกเขา ไซตามะวีรบุรุษที่ไม่เกี่ยวข้องจากฟากฟ้าของเมือง Z ได้ทำในสิ่งที่กล้าหาญความฝันในวัยเด็กและความบันเทิงของตัวเขา เขาฝึกฝนตัวเองจนถึง3ปีทำให้เขาสามารถเอาชนะคู่ต่อสู้ได้อย่างง่ายดายด้วยเพียงหมัดเดียว จากความสนุกและความบันเทิงกลับกลายเป็นความเบื่อหน่ายกับพลังอำนาจทุกอย่างอันเกินขีดจำกัดของเขาเอง",
    book_image: "https://test-cloudbased.s3.amazonaws.com/one_piece.png",
    book_price: 100.0,
    category_name: "Fiction",
    book_quantity: "1",
    book_seller: "2",
  },
];

export default function HomeComp({ user, data }: ProfileProps) {
  console.log("USER-Home:", user);

  const handleBookClick = (data: any) => {
    data.user_id = user.user_id;
    window.location.href = `/bookDetail?data=${JSON.stringify(data)}`;
  };

  const [filteredData, setFilteredData] = useState<Book[]>(data || mockData);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string | null>(
    null
  );

  const handleCategoriesChange = (value: string | null) => {
    setSelectedCategories(value);
  };

  useEffect(() => {
    let updatedData = data ? [...data] : [];

    updatedData = (data || mockData).filter((book) =>
      book?.book_title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategories !== null) {
      if (selectedCategories !== "All") {
        updatedData = updatedData.filter(
          (book) => book.category_name === selectedCategories
        );
      } else {
        setSelectedCategories(null);
      }
    }
    setFilteredData(updatedData);
  }, [searchTerm, selectedCategories, data]);
  return (
    <div className="h-screen p-10">
      <div className="p-10 flex ">
        <Input
          className="border-gray-400 border-2 w-[40em]"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select onValueChange={handleCategoriesChange}>
          <SelectTrigger className="w-[180px] border-gray-400 border-2 ml-5">
            <SelectValue placeholder="CATEGORIES" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Fiction">Fiction</SelectItem>
              <SelectItem value="Non-Fiction">Non-Fiction</SelectItem>
              <SelectItem value="Mystery/Thriller">Mystery/Thriller</SelectItem>
              <SelectItem value="Science Fiction">Science Fiction</SelectItem>
              <SelectItem value="Fantasy">Fantasy</SelectItem>
              <SelectItem value="Romance">Romance</SelectItem>
              <SelectItem value="Horror">Horror</SelectItem>
              <SelectItem value="Manga">Manga</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-full flex justify-center items-center h-1/2">
        <Image
          src="/Img-home.png"
          width={1200}
          height={450}
          alt="hospitality"
        />
      </div>
      <div className="flex flex-wrap p-5">
        {filteredData.map((book, index) => (
          <div key={index} className="p-10">
            <BookComp data={book} onClick={() => handleBookClick(book)} />
          </div>
        ))}
      </div>
    </div>
  );
}
