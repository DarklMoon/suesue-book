import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import { Pencil, Trash2, FolderPlus } from "lucide-react";

type Props = {};

const ManageBooks = (props: Props) => {
  return (
    <>
      <div className="w-full h-[70px] mt-[80px] ml-[40px]">
        <h1 className="font-bold text-[20px]">
          Manage Books
          <span className="text-[grey] opacity-25 text-[10px]">
            {" "}
            Manage Your Books
          </span>
        </h1>
        <hr className="w-[250px] h-[10px] border-[black]"></hr>
      </div>
      <Button className="ml-[40px]">
        <span>
          <FolderPlus />
        </span>
        Add Book
      </Button>
      <div className="flex justify-center w-full h-[450px] overflow-scroll mt-[50px]">
        <div className="w-[950px] h-[350px] overflow-scroll">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Books</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Total</TableHead>
                <TableHead></TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium flex">
                  <Image
                    src="/profile.png"
                    width={100}
                    height={100}
                    alt="test"
                    style={{ borderRadius: "10px", marginRight: "20px" }}
                  />
                  <div>
                    <h1 className="text-[20px] font-bold">Dumb books</h1>
                    <p className="text-[12px] opacity-25">Categories</p>
                    <p className="text-[12px] opacity-25">By Vendor's name</p>
                  </div>
                </TableCell>
                <TableCell>50 ฿</TableCell>
                <TableCell>1</TableCell>
                <TableCell>50.00 ฿</TableCell>
                <TableCell>
                  <Button className="bg-transparent">
                    <span>
                      <Pencil color="black" />
                    </span>
                  </Button>
                </TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger>
                      <span>
                        <Trash2 color="black" />
                      </span>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                          This action cannot be undone. This will permanently
                          delete your account and remove your data from our
                          servers.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <Button type="submit">Confirm</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <hr className="w-[950px] h-[10px] border-[black] mx-auto"></hr>
    </>
  );
};

export default ManageBooks;
