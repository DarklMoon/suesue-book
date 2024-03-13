"use client";

import React, { useEffect, useState } from "react";
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
import { User } from "@/type"


const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  author: z.string().min(2, {
    message: "Author must be at least 2 characters.",
  }),
  description: z.string(),
  categories: z.string().min(0, {
    message: "Category is required",
  }),
  price: z.string().min(2, { message: "price must be required" }),
});


const AddBooks = ({ user }: User) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      author: "",
      description: "",
      categories: "",
      price: "",
    },
  });

  const [link, setLink] = useState<string | undefined>("https://test-cloudbased.s3.amazonaws.com/Icon-GROUP.png");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmitImgProfile = async (e: any) => {
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

      const linkImgS3 =
        "https://test-cloudbased.s3.amazonaws.com/" + formatFilename;
      setLink(linkImgS3);
      setUploading(false);

    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const formData: FormData = new FormData();

    if(link){formData.append("book_image", link);}
    formData.append("book_seller", user.user_id);
    formData.append("book_title", values.title);
    formData.append("book_author", values.author);
    formData.append("book_info", values.description);
    formData.append("book_category", values.categories);
    formData.append("book_price", values.price.toString());

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
        router.push("/home");
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
          <div className="flex flex-col justify-center w-full">
            <Image
              className="rounded-full w-40 h-40"
              width={40}
              height={40}
              src={
                link ??
                "https://test-cloudbased.s3.amazonaws.com/Icon-GROUP.png"
              }
              alt="image description"
            />
            <form
              onSubmit={handleSubmitImgProfile}
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
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="mt-[10px]">
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                            <SelectItem value="1">Fiction</SelectItem>
                            <SelectItem value="2">Non-Fiction</SelectItem>
                            <SelectItem value="3">Mystery/Thriller</SelectItem>
                            <SelectItem value="4">Science Fiction</SelectItem>
                            <SelectItem value="5">Fantasy</SelectItem>
                            <SelectItem value="6">Romance</SelectItem>
                            <SelectItem value="7">Horror</SelectItem>
                            <SelectItem value="8">Manga</SelectItem>
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
