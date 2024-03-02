"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const formSchema = z
  .object({
    Firstname: z.string().min(2).max(50),
    Lastname: z.string().min(2).max(50),
    Phone: z
      .string()
      .min(1, { message: "Phone number is required" })
      .min(10, { message: "Incorect Phone number" })
      .max(10, { message: "Incorect Phone number" })
      .refine((val) => !isNaN(val as unknown as number), {
        message: "Phone number should be a number",
      }),
    Email: z.string().email(),
    Username: z.string().min(5).max(50),
    Password: z.string().min(8).max(100),
    ConfirmPassword: z.string().min(8).max(100),
  })
  .refine((data) => data.Password === data.ConfirmPassword, {
    message: "Password not Match",
    path: ["ConfirmPassword"],
  });

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Firstname: "",
      Lastname: "",
      Phone: "",
      Email: "",
      Username: "",
      Password: "",
      ConfirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
    const router = useRouter();

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-[#4F6F52]">
      <div style={{ minWidth: "30%" }}>
        <div className="flex shadow-lg flex-1 flex-col justify-center px-6 pt-[2em] pb-[15em] lg:px-8 bg-white rounded-md overflow-auto"
          style={{ maxHeight: "90vh" }}
        >
          <h1 className="text-[24px] ml-[30px] mt-[15px] font-semibold">
            Create you Account
          </h1>
          <div className="w-full h-[450px] mt-[25px] flex justify-center">
            <div className="w-[360px] h-full">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="Firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Firstname</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="Lastname"
                    render={({ field }) => (
                      <FormItem className="mt-[5px]">
                        <FormLabel>Lastname</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="Phone"
                    render={({ field }) => (
                      <FormItem className="mt-[5px]">
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="Email"
                    render={({ field }) => (
                      <FormItem className="mt-[5px]">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="Username"
                    render={({ field }) => (
                      <FormItem className="mt-[5px]">
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="Password"
                    render={({ field }) => (
                      <FormItem className="mt-[5px]">
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="ConfirmPassword"
                    render={({ field }) => (
                      <FormItem className="mt-[5px]">
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />
                  <div className="mt-7 flex justify-center w-full h-[40px]">
                    <Button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-[#F9BC60] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#E16162] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      Sign up
                    </Button>
                  </div>
                  <p className="mt-5 text-center text-sm text-gray-500">
                    Do you already have an account?{" "}
                    <span
                      className="font-semibold leading-6 text-[#4BA8FF] hover:text-indigo-500 cursor-pointer"
                      onClick={() => {
                        router.push("/login");
                      }}
                    >
                      Login here !
                    </span>
                  </p>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
