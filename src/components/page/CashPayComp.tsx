"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {};

const CashPay = (props: Props) => {
  return (
    <>
      <div className="w-full h-[70px] mt-[80px] ml-[40px]">
        <h1 className="font-bold text-[20px]">
          Payment
          <span className="text-[grey] opacity-25 text-[10px]">
            {" "}
            Choose payment method below
          </span>
        </h1>
        <hr className="w-[250px] h-[10px] border-[black]"></hr>
      </div>

      <RadioGroup
        className="flex justify-center items-center"
        defaultValue="option-three"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Pay with credit card</Label>
        </div>
        <div className="flex items-center space-x-2 ml-[70px]">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Pay with QR code</Label>
        </div>
        <div className="flex items-center space-x-2 ml-[70px]">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-three">Cash on delivery</Label>
        </div>
      </RadioGroup>
      <div className="flex justify-center w-full h-[350px] overflow-scroll mt-[50px]">
        <div className="w-[700px] h-[350px] overflow-scroll">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Books</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <h1 className="text-[20px] font-bold">Dumb books</h1>
                  <p className="text-[12px] opacity-25">Categories</p>
                  <p className="text-[12px] opacity-25">By Vendor's name</p>
                </TableCell>
                <TableCell>50 ฿</TableCell>
                <TableCell>1</TableCell>
                <TableCell className="text-right">50.00 ฿</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <hr className="w-[700px] h-[10px] border-[black] mx-auto"></hr>

      <div className="w-full h-[150px]  flex justify-center">
        <div className="h-full w-[700px]  flex justify-end">
          <div className="w-[250px] h-[150px]">
            <div className="w-full h-[40px] flex justify-between items-center">
              <h1 className="font-bold">Subtotal</h1>
              <h1 className="font-bold">50 ฿</h1>
            </div>
            <div className="w-full h-[40px] flex justify-between items-center">
              <h1 className="font-bold">Shipping</h1>
              <h1 className="font-bold">50 ฿</h1>
            </div>
            <div className="w-full h-[40px] flex justify-between items-center">
              <h1 className="font-bold">Total</h1>
              <h1 className="font-bold">100 ฿</h1>
            </div>
            <div className="w-full h-[30px] flex justify-end mt-[10px]">
              <Button>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CashPay;
