// "use client";
// import React from "react";
// import Link from "next/link";
// import DatePicker from "@/components/Datepicker"
// import Image from "next/image";

// type Props = {};

// const Profile = (props: Props) => {
//   return (
//     <>
//       <div className="mt-5 p-10 justify-center mt-3 ml-[70px] mr-[50px]">
//         <div className="border-b-2 border-black mb-4 w-6/12 pl-2 ml-[-10px]">
//           <p className="text-2xl font-bold inline-block">Profile</p>
//           <p className="text-sm text-[#AAAAAA] inline-block ml-3">
//             Manage your profile
//           </p>
//         </div>

//         {/* Row 1 */}
//         <div className="relative grid grid-cols-2 gap-4 mt-[50px] ">
//           {/* First column */}
//           <div className="flex border justify-center">
//             <div className="border border-2 border-white flex justify-center grid grid-row-2">
//               {/* Profile template */}
//               <div className="flex justify-center items-center">
//                 <Image
//                   width={180}
//                   height={50}
//                   className="rounded-full w-36 h-36"
//                   src="https://i.pinimg.com/564x/90/59/96/90599631f3186f08e73ec8553c00bda2.jpg"
//                   alt="Extra large avatar"
//                 />
//               </div>
//               <div className="inline-block">
//                 <div className="border border-2 border-pink inline-block">
//                   <h3>Choose file to upload</h3>
//                 </div>
//                 <div className="inline-block">
//                   <label className="cursor-pointer">
//                     <span>Browser Files</span>
//                     <input type="file" className="hidden" />
//                   </label>
//                 </div>
//               </div>
//               {/* <div className="border border-2 border-pink inline-block">
//               <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide cursor-pointer">
//                   <span className="mt-2 text-base leading-normal">Select a file</span>
//                   <input type='file' className="hidden" />
//               </label>
//             </div> */}
//             </div>
//           </div>

//           {/* Second column */}
//           <div className="border-solid border-2 border-[#B7B7B7] h-80 inline-block grid grid-cols-2">
//             {/* fix position of div box */}
//             <div>
//               <h3 className="ml-[30px] mt-4">First Name</h3>
//               <input className="border-2 border-[#B5B5B5] ml-[30px] mt-2 w-[200px]"></input>
//             </div>
//             <div>
//               <h3 className="ml-[30px] mt-4">Last Name</h3>
//               <input className="border-2 border-[#B5B5B5] ml-[30px] mt-2 w-[200px]"></input>
//             </div>
//             <div>
//               <h3 className="ml-[30px] mt-3">Phone Number</h3>
//               <input className="border-2 border-[#B5B5B5] ml-[30px] mt-2 w-[200px]"></input>
//             </div>
//             <div>
//               <h3 className="ml-[30px] mt-3">Email</h3>
//               <input className="border-2 border-[#B5B5B5] ml-[30px] mt-2 w-[200px]"></input>
//             </div>
//             <div>
//               <h3 className="ml-[30px] mt-3">Username</h3>
//               <input className="border-2 border-[#B5B5B5] ml-[30px] mt-2 w-[200px]"></input>
//             </div>
//             <div></div>
//             <div>
//               <button className="rounded-l bg-[#F9BC60] ml-7 my-5 text-white px-4 py-2">
//                 Edit Profile
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Row 2 */}
//         {/* Row 1 */}
//         <div className="col-span-2 mt-10 border-2 border-[#B7B7B7]">
//           <div className="w-[700px] flex items-center space-x-3 p-3">
//             <div className="inline-block">
//               <svg
//                 width="30px"
//                 height="30px"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M22.75 7C22.75 7.41421 22.4142 7.75 22 7.75L2 7.75C1.58579 7.75 1.25 7.41421 1.25 7C1.25 6.58579 1.58579 6.25 2 6.25L22 6.25C22.4142 6.25 22.75 6.58579 22.75 7Z"
//                   fill="#B4B4B4"
//                 />
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M19.75 12C19.75 12.4142 19.4142 12.75 19 12.75L5 12.75C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25L19 11.25C19.4142 11.25 19.75 11.5858 19.75 12Z"
//                   fill="#B4B4B4"
//                 />
//                 <path
//                   fill-rule="evenodd"
//                   clip-rule="evenodd"
//                   d="M16.75 17C16.75 17.4142 16.4142 17.75 16 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H16C16.4142 16.25 16.75 16.5858 16.75 17Z"
//                   fill="#B4B4B4"
//                 />
//               </svg>
//             </div>

//             {/* Search */}
//             <form className="inline-block">
//               <label
//                 htmlFor="default-search"
//                 className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//               >
//                 Search
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 end-2 flex items-center pointer-events-none">
//                   <svg
//                     className="w-4 h-4 text-gray-500 dark:text-gray-400"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 20 20"
//                   >
//                     <path
//                       stroke="currentColor"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       stroke-width="2"
//                       d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                     />
//                   </svg>
//                 </div>
//                 <input
//                   type="search"
//                   id="default-search"
//                   className="block w-full p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   placeholder="Search.."
//                   required
//                 />
//               </div>
//             </form>

//             {/* Date picker */}
//             <div date-rangepicker className="flex space-x-3 items-center">
//               <div className="flex items-center">
//                 <DatePicker />
//               </div>

//               <div className="flex items-center">
//                 <DatePicker />
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-3 gap-8 p-6">
//             <Link href="/order">
//               <button className="border bg-[#DBDBDB] border-black rounded w-[320px]">
//                 <div className="text-left m-4">
//                   <p>Order ID</p>
//                   <br />
//                   <p>Date: yyyy/mm/dd</p>
//                   <p>Total Items: 3</p>
//                   <p>Total Price: 100฿</p>
//                 </div>
//               </button>
//             </Link>
//             <Link href="/order">
//               <button className="border bg-[#DBDBDB] border-black rounded w-[320px]">
//                 <div className="text-left m-4">
//                   <p>Order ID</p>
//                   <br />
//                   <p>Date: yyyy/mm/dd</p>
//                   <p>Total Items: 3</p>
//                   <p>Total Price: 100฿</p>
//                 </div>
//               </button>
//             </Link>
//             <Link href="/order">
//               <button className="border bg-[#DBDBDB] border-black rounded w-[320px]">
//                 <div className="text-left m-4">
//                   <p>Order ID</p>
//                   <br />
//                   <p>Date: yyyy/mm/dd</p>
//                   <p>Total Items: 3</p>
//                   <p>Total Price: 100฿</p>
//                 </div>
//               </button>
//             </Link>
//             <Link href="/order">
//               <button className="border bg-[#DBDBDB] border-black rounded w-[320px]">
//                 <div className="text-left m-4">
//                   <p>Order ID</p>
//                   <br />
//                   <p>Date: yyyy/mm/dd</p>
//                   <p>Total Items: 3</p>
//                   <p>Total Price: 100฿</p>
//                 </div>
//               </button>
//             </Link>
//             <Link href="/order">
//               <button className="border bg-[#DBDBDB] border-black rounded w-[320px]">
//                 <div className="text-left m-4">
//                   <p>Order ID</p>
//                   <br />
//                   <p>Date: yyyy/mm/dd</p>
//                   <p>Total Items: 3</p>
//                   <p>Total Price: 100฿</p>
//                 </div>
//               </button>
//             </Link>
//             <Link href="/order">
//               <button className="border bg-[#DBDBDB] border-black rounded w-[320px]">
//                 <div className="text-left m-4">
//                   <p>Order ID</p>
//                   <br />
//                   <p>Date: yyyy/mm/dd</p>
//                   <p>Total Items: 3</p>
//                   <p>Total Price: 100฿</p>
//                 </div>
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Profile;

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
  name: string;
  date: string;
  participants: number;
  position: string;
  isActive: boolean;
}

interface ShowDataProps {
  data: Project[];
}

const mockData: Project[] = [
  {
    name: "Project A",
    date: "2022-01-01",
    participants: 5,
    position: "Developer",
    isActive: true,
  },
  {
    name: "Project B",
    date: "2022-02-01",
    participants: 8,
    position: "Designer",
    isActive: true,
  },
  {
    name: "Project C",
    date: "2022-02-01",
    participants: 8,
    position: "Designer",
    isActive: false,
  },
  {
    name: "Project D",
    date: "2022-02-01",
    participants: 8,
    position: "Designer",
    isActive: false,
  },
  {
    name: "Project E",
    date: "2022-02-01",
    participants: 8,
    position: "Designer",
    isActive: true,
  },
];

type User = {
  // Define the user object structure here
  email: string;
  username?: string;
  user_id?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  role?: string;
  user_image?: string;
  // Add other user properties as needed
};

// Define the props for the TopBar component
interface ProfileProps {
  user: User;
  data: Project[];
}

export default function Profile({ user, data }: ProfileProps) {
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

  const [first_name, setFname] = useState<string>("");
  const [last_name, setLname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [date_of_birth, setDate] = useState<string>("");
  const [link, setLink] = useState<string>(
    // "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    "https://test-cloudbased.s3.amazonaws.com/Icon-GROUP.png"
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
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
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

    if (selectedAvailableOption !== null) {
      updatedData = updatedData.filter(
        (project) => project.isActive === selectedAvailableOption
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
      console.log(data.status);
      console.log("ImageName: ", data.filename);
      const formatFilename = data.filename.replace(/ /g, "+");
      console.log("ReFormat: ", data);
      setLink("https://test-cloudbased.s3.amazonaws.com/" + formatFilename);
      console.log("LinkImg:", link);
      setUploading(false);

      //CALL FETCH API TO UPDATE IMAGE PROFILE..


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
                src={link}
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
              {/* <UploadButton
                className="bg-[#64cbc5] text-white rounded-xl mt-3 p-1"
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  // Do something with the response
                  console.log("Files: ", res);
                  setLink(res ? res[0].url : "");
                  alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                  // Do something with the error.
                  alert(`ERROR! ${error.message}`);
                }}
              /> */}

              {/* <p>{link}</p> */}
              <div className="text-center	mt-3">
                <div className="text-2xl font-semibold">Username</div>
                <div className="text-gray-400 mt-1">Firstname Lastname</div>
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
                  value={date_of_birth}
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
            <div className="absolute inset-y-0 end-2 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

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
                className={`shadow-md rounded-sm bg-gray-100 w-[18em] h-[10em] m-5 p-5 relative ${
                  project.isActive ? "border-2 border-green-500" : ""
                }`}
              >
                <div
                  className={`w-20 text-white text-center absolute top-3 right-5 rounded-sm ${
                    project.isActive ? "bg-green-500" : "bg-gray-500"
                  }`}
                >
                  {project.isActive ? "Active" : "InActive"}
                </div>
                <div className="text-xl">{project.name}</div>
                <div className="mt-3">
                  <div>Date: {project.date}</div>
                  <div>Participants: {project.participants}</div>
                  <div>Position: {project.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
