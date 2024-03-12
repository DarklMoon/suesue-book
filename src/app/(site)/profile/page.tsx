import React from "react";
import ProfileComp from "@/components/page/ProfileComp";
import { getSession } from "@/app/api/auth/func/getEnrolls";

export interface Project {
  orderId: string;
  date: string;
  totalItems: number;
  totalPrice: string;
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
interface ProfileProps {
  data: Project[];
}
const Profile = async ({ data }: ProfileProps) => {
  const session = await getSession();

  return <ProfileComp user={session.user} data={data}></ProfileComp>;
};

export default Profile;