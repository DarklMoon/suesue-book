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

const formSchema = z.object({
  Firstname: z.string().min(2).max(50),
});

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Firstname: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="w-full h-[650px] mt-[50px] flex justify-center items-center">
      <div className="w-[450px] h-[650px] outline ring-black rounded-md">
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
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage className="text-[10px]"/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Firstname"
                  render={({ field }) => (
                    <FormItem className="mt-[5px]">
                      <FormLabel>Lastname</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage className="text-[10px]"/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Firstname"
                  render={({ field }) => (
                    <FormItem className="mt-[5px]">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage className="text-[10px]"/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Firstname"
                  render={({ field }) => (
                    <FormItem className="mt-[5px]">
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage className="text-[10px]"/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Firstname"
                  render={({ field }) => (
                    <FormItem className="mt-[5px]">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage className="text-[10px]"/>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="Firstname"
                  render={({ field }) => (
                    <FormItem className="mt-[5px]">
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage className="text-[10px]"/>
                    </FormItem>
                  )}
                />
                <p className="text-center mt-[25px]">
                  Do you already have an account? Login here!
                </p>
                <div className="flex justify-center w-full h-[40px]">
                  <Button
                    type="submit"
                    className="mt-[10px] justify-self-center items-center"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
