import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getSession, login, logout } from "@/app/api/auth/route";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import LoginForm from "@/components/auth/LoginForm";
type Props = {};

const Login = async (props: Props) => {
  
  const session = await getSession();

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#4F6F52]">
      <div style={{ minWidth: "30%" }}>
        <div className="flex min-h-full shadow-lg flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login with Password
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;