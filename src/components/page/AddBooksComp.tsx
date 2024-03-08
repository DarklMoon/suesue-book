"use client";

import React from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

const formSchema = z.object({
  picture: z.string().min(0, {
    message: "pls select a picture",
  }),
  author: z.string().min(2, {
    message: "Author must be at least 2 characters.",
  }),
  description: z.string(),
  categories: z.string().min(0, {
    message: "Category is required",
  }),
  price: z.string().min(2,{message:"price must be required"})
});

type Props = {};

const AddBooks = (props: Props) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      picture: "",
      author: "",
      description: "",
      categories: "",
      price: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const formData: FormData = new FormData();
    formData.append("picture", values.picture);
    formData.append("author", values.author);
    formData.append("description", values.description);
    formData.append("categories", values.categories);
    formData.append("price", values.price.toString());

    try {
      const response = await fetch("api/books", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response) {
        const data = await response.json();
        router.push("/managebooks")
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("TRANSACTION_ENDING", formData);
    }
  }

  const router = useRouter();

  return (
    <>
      <div className="w-full h-[70px] mt-[80px] ml-[40px]">
        <h1 className="font-bold text-[20px]">
          Create Books
          <span className="text-[grey] opacity-25 text-[10px]">
            {" "}
            Create Your Books
          </span>
        </h1>
        <hr className="w-[250px] h-[10px] border-[black]"></hr>
      </div>

      <div className="flex justify-center w-full h-[450px] mt-[5px]">
        <div className="w-[400px] h-[650px]">
          <div className="flex justify-center w-full">
            <Image src="/profile.png" width={150} height={200} alt="test" />
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="picture"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Picture</FormLabel>
                    <FormControl>
                      <Input id="picture" type="file" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem className="mt-[10px]">
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="mt-[10px]">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="categories"
                render={({ field }) => (
                  <FormItem className="mt-[10px]">
                    <FormLabel>Categories</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup {...field}>
                            <SelectItem value="manga">Manga</SelectItem>
                            <SelectItem value="novel">Novel</SelectItem>
                            <SelectItem value="how-to">How-To</SelectItem>
                            <SelectItem value="comedy">Comedy</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="mt-[10px]">
                    <FormLabel>Price {"(฿)"}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
    </>
  );
};

export default AddBooks;
