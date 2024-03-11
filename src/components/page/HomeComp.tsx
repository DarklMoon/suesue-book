"use client"
import React, { useState } from "react";
import Image from "next/image";
import BookComp from "../book/BookComp";


export interface Project {
  orderId: string;
  date: string;
  totalItems: number;
  totalPrice: string;
}

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
  data: Project[];
}

const mockData: Project[] = [
  {
    orderId: "#000-001",
    date: "2022-01-01",
    totalItems: 5,
    totalPrice: "100฿",
  },
  {
    orderId: "#000-002",
    date: "2022-02-01",
    totalItems: 8,
    totalPrice: "100฿",
  },
  {
    orderId: "#000-003",
    date: "2022-02-01",
    totalItems: 8,
    totalPrice: "100฿",
  },
  {
    orderId: "#000-004",
    date: "2022-02-01",
    totalItems: 8,
    totalPrice: "100฿",
  },
  {
    orderId: "#000-005",
    date: "2022-02-01",
    totalItems: 8,
    totalPrice: "100฿",
  },
];

export default function HomeComp({ user, data }: ProfileProps) {
  console.log("USER-Home:", user)
  
  const [filteredData, setFilteredData] = useState<Project[]>(data || mockData);
  return (
    <div className="h-screen p-10">
      <div></div>
      <div className="flex flex-wrap p-5">
        {filteredData.map((project, index) => (
          <div
            key={index}
            className="p-10"
          >
            <BookComp/>
            
          </div>
        ))}
      </div>
    </div>
  );
}


