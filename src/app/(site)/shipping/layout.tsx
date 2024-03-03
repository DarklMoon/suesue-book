
import type { Metadata } from "next";
import MenuPayrollManagement from "@/components/payroll/MenuPayrollManagement";
import AddressManagement from "@/components/Shippingmenu/AddressManagement";
import Subtotal from "@/components/Shippingmenu/Subtotal";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen mt-5 p-10 justify-center mt-3 ml-[70px] mr-[50px] border border-2">
      <div className="border-b-2 mb-4 w-6/12 pl-2 ml-[-10px]">
        <p className="text-2xl font-bold inline-block">Shipping address</p>
        <p className="text-sm text-[#AAAAAA] inline-block ml-3">Select your address</p>
      </div>
      <div className="flex grid grid-cols-11 grid-row-4 border-2 gap-2">
        <div className="row-span-1 border-2 border-black col-span-6 flex items-center justify-center">
          <AddressManagement/>
        </div>
        <div className="row-span-4 col-span-5 border-2 border-lime-400">
          <Subtotal/>
        </div>
        <div className="row-span-3 col-span-6">
          <main className="grow">{children}</main>
        </div>
      </div>

    </div>
  );
}
