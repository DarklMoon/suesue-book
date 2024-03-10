"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";

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

// Define the props for the TopBar component
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
export default function Profile({ user, data }: ProfileProps) {
  console.log("USER_PROFILE:", user)
  console.log("USER_DATA", data)
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedDateOption, setSelectedDateOption] = useState<string | null>(
    null
  );
  const [selectedAvailableOption, setSelectedAvailableOption] = useState<
    boolean | null
  >(null);
  const [filteredData, setFilteredData] = useState<Project[]>(data || mockData);
  const [buttonText, setButtonText] = useState("Edit Profile");
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const [first_name, setFname] = useState<string | undefined>(user.first_name);
  const [last_name, setLname] = useState<string | undefined>(user.last_name);
  const [phone, setPhone] = useState<string | undefined>(user.phone);
  const [email, setEmail] = useState<string | undefined>(user.email);
  const [username, setDate] = useState<string | undefined>(
    user.username
  );
  const [link, setLink] = useState<string | undefined>(
    user.user_img ?? "https://test-cloudbased.s3.amazonaws.com/Icon-GROUP.png"
  );

  const toggleInputState = () => {
    setIsInputDisabled(!isInputDisabled);
    setButtonText(isInputDisabled ? "Apply" : "Edit Profile");
    if (isInputDisabled === true) {
      console.log("Edit -> Apply");
    } else {
      console.log("Apply -> Edit");
    }
  };

  const handleDateChange = (value: string | null) => {
    setSelectedDateOption(value);
  };

  const handleAvilibleChange = (value: string | null) => {
    if (value === "Active") {
      setSelectedAvailableOption(true);
    } else {
      setSelectedAvailableOption(false);
    }
  };

  const handleRefresh = () => {
    setSelectedDateOption(null);
    setSelectedAvailableOption(null);
    setSearchTerm("");
  };

  useEffect(() => {
    let updatedData = data ? [...data] : [];

    updatedData = (data || mockData).filter((project) =>
      project.orderId.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedDateOption === "Oldest") {
      updatedData = updatedData.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );
    } else if (selectedDateOption === "Latest") {
      updatedData = updatedData.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    }

    setFilteredData(updatedData);
  }, [searchTerm, selectedDateOption, selectedAvailableOption, data]);

  // ---------------------Upload Picture Profile------------------------------------

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      console.log("File-Front:", file);
      const response = await fetch("/api/uploadImgS3", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      // console.log("ImageName: ", data.filename);

      const formatFilename = data.filename.replace(/ /g, "+");
      console.log("ReFormat: ", data);
      
      const linkImgS3 = "https://test-cloudbased.s3.amazonaws.com/" + formatFilename;
      setLink(linkImgS3);
      setUploading(false);

      //CALL FETCH API TO UPDATE IMAGE PROFILE..
      const formImg = new FormData();
      if (user.user_id) {
        formImg.append("user_id", user.user_id.toString());
      }
      formImg.append("user_img", linkImgS3);
      formImg.append("email", user.email)
      
      const resUserProfile = await fetch("/api/userProfile/imgProfile", {
        method: "PUT",
        body: formImg,
      });
      // console.log("ResultUploadImgProfile",resUserProfile);

    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <div className="h-screen">
      <div className="p-10">
        <div className="text-4xl font-bold	">Profile</div>
        <hr className="w-30 h-[2px] bg-gray-300 border-0 rounded md:my-4 dark:bg-gray-700"></hr>
      </div>
      <div className="px-10 pb-0.5">
        <div className="flex justify-center max-lg:flex-col max-lg:items-center">
          <div className="w-[35%] pr-10 max-lg:w-3/4 max-lg:mb-5">
            <div className="flex flex-col justify-center border-2 border-gray-500 p-5 items-center h-[25em]">
              <Image
                className="rounded-full w-40 h-40"
                width={40}
                height={40}
                src={link ?? "https://test-cloudbased.s3.amazonaws.com/Icon-GROUP.png"}
                alt="image description"
              />
              <form
                onSubmit={handleSubmit}
                className="items-center flex flex-col justify-center mt-5"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-[15em]"
                />
                <Button
                  type="submit"
                  disabled={!file || uploading}
                  className="bg-[#F9BC60] text-white rounded-xl mt-3 p-2 px-5"
                >
                  {uploading ? "Uploading..." : "Upload"}
                </Button>
              </form>
              <div className="text-center	mt-3">
                <div className="text-2xl font-semibold">{user.username}</div>
                <div className="text-gray-400 mt-1">
                  {user.first_name} {user.last_name}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[65%] border-2 border-gray-500 p-5 max-lg:w-full">
            <div className="grid grid-rows-3 grid-cols-2 gap-x-10 ">
              <div className="pt-5">
                <p className="mb-2">First Name</p>
                <Input
                  className="border-gray-400 border-2"
                  placeholder="First name"
                  disabled={isInputDisabled}
                  value={first_name}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div className="pt-5">
                <p className="mb-2">Last Name</p>
                <Input
                  className="border-gray-400 border-2 text-black"
                  placeholder="Last name"
                  disabled={isInputDisabled}
                  value={last_name}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>

              <div className="pt-5">
                <p className="mb-2">Phone Number</p>
                <Input
                  className="border-gray-400 border-2"
                  placeholder="Phone Number"
                  disabled={isInputDisabled}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="pt-5">
                <p className="mb-2">Email</p>
                <Input
                  className="border-gray-400 border-2"
                  placeholder="Email"
                  disabled={isInputDisabled}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="pt-5">
                <p className="mb-2">Birthday</p>
                <Input
                  className="border-gray-400 border-2"
                  placeholder="Role"
                  type="date"
                  disabled={isInputDisabled}
                  value={username}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-10">
              <Button className="bg-[#F9BC60]" onClick={toggleInputState}>
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[100%] border-2 border-gray-500 p-5 my-10 pb-2 mb-10">
          <div className="pt-5 flex">
            <Input
              className="border-gray-400 border-2 w-50"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select onValueChange={handleDateChange}>
              <SelectTrigger className="w-[180px] border-gray-400 border-2 ml-5">
                <SelectValue placeholder="DATE" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Date</SelectLabel>
                  <SelectItem value="Oldest">Oldest</SelectItem>
                  <SelectItem value="Latest">Latest</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select onValueChange={handleAvilibleChange}>
              <SelectTrigger className="w-[180px] border-gray-400 border-2 ml-5">
                <SelectValue placeholder="AVAILABLE" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Available</SelectLabel>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="InActive">InActive</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button className="bg-gray-400 ml-4" onClick={handleRefresh}>
              Refresh
            </Button>
          </div>
          <div className="flex flex-wrap p-5">
            {filteredData.map((project, index) => (
              <div
                key={index}
                className={`shadow-md rounded-sm bg-gray-100 w-[18em] h-[10em] m-5 p-5 relative border-2 border-gray-500`}
              >
                <div
                  className={`w-20 text-white text-center absolute top-3 right-5 rounded-sm bg-gray-500`}
                >
                  {project.orderId}
                </div>
                <div className="text-xl">{"ORDER ID"}</div>
                <div className="mt-3">
                  <div>Date: {project.date}</div>
                  <div>Total Items: {project.totalItems}</div>
                  <div>Total Price: {project.totalPrice}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
