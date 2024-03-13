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
import { User } from "@/type"
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const ShipNewAddComp = ({ user }: {user: User}) => {
    const { toast: showToast } = useToast();
    const router = useRouter();
    console.log("SHIPMENT-ADD:", user)
      const [receiverName, setReceiverName] = useState<string | undefined>("");
      const [receiverPhone, setReceiverPhone] = useState<string | undefined>("");
      const [streetAddress, setStreetAddress] = useState<string | undefined>("");
      const [province, setProvince] = useState<string | null>(null);
      const [district, setDistrict] = useState<string | undefined>("");
      const [sub_district, setSubDistrict] = useState<string | undefined>("");
      const [postal_code, setPostal_code] = useState<string | undefined>("");
      
  const handleProvinceChange = (value: string | null) => {
    setProvince(value);
  };

  const submitAddress = async () => {
    try {
      const formInfo = new FormData();

      if (user.user_id) {formInfo.append("customer_id", user.user_id.toString());}
      if (receiverName) formInfo.append("receiver_name", receiverName);
      if (receiverPhone) formInfo.append("receiver_phone", receiverPhone);
      if (streetAddress) formInfo.append("street_address", streetAddress);
      if (province) formInfo.append("province", province);
      if (district) {formInfo.append("district", district);}
      if (sub_district) formInfo.append("sub_district", sub_district);
      if (postal_code) formInfo.append("postal_code", postal_code);

      const resShip = await fetch("/api/shipment", {
        method: "POST",
        body: formInfo,
      });

      if (resShip) {
        showToast({
          description: "✅ Add new address success!",
          variant: "default",
        });
      }
      
      window.location.reload();
      router.push("/shipping/chooseadd");

      return console.log("Add new address Success!", resShip);
    } catch (error) {
      console.log(error);
      throw new Error("ERROR: Add new address");
    }
  }

  return (
    <div className="relative">
      <div className="grid grid-rows-2 grid-cols-2 gap-x-5 ">
        <div>
          <Input
            className="peer border border-[#8C8C8C] pl-4 py-1"
            placeholder="Name"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
          />
        </div>
        <div>
          <Input
            className="peer border border-[#8C8C8C] pl-4 py-1"
            placeholder="Phone"
            value={receiverPhone}
            onChange={(e) => setReceiverPhone(e.target.value)}
          />
        </div>

        <div className="pt-2">
          <Input
            className="peer border border-[#8C8C8C] pl-4 py-1 h w-[400px]"
            placeholder="Address"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-rows-1 grid-cols-1 gap-x-5">
        <div className="pt-3">
          <Select onValueChange={handleProvinceChange}>
            <SelectTrigger className="w-[180px] border border-[#8C8C8C]">
              <SelectValue placeholder="Province" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Province</SelectLabel>
                <SelectItem value="กรุงเทพมหานคร">กรุงเทพมหานคร</SelectItem>
                <SelectItem value="กระบี่">กระบี่</SelectItem>
                <SelectItem value="กาญจนบุรี">กาญจนบุรี</SelectItem>
                <SelectItem value="กาฬสินธุ์">กาฬสินธุ์</SelectItem>
                <SelectItem value="กำแพงเพชร">กำแพงเพชร</SelectItem>
                <SelectItem value="ขอนแก่น">ขอนแก่น</SelectItem>
                <SelectItem value="จันทบุรี">จันทบุรี</SelectItem>
                <SelectItem value="ฉะเชิงเทรา">ฉะเชิงเทรา </SelectItem>
                <SelectItem value="ชัยนาท">ชัยนาท </SelectItem>
                <SelectItem value="ชัยภูมิ">ชัยภูมิ </SelectItem>
                <SelectItem value="ชุมพร">ชุมพร </SelectItem>
                <SelectItem value="ชลบุรี">ชลบุรี </SelectItem>
                <SelectItem value="เชียงใหม่">เชียงใหม่ </SelectItem>
                <SelectItem value="เชียงราย">เชียงราย </SelectItem>
                <SelectItem value="ตรัง">ตรัง </SelectItem>
                <SelectItem value="ตราด">ตราด </SelectItem>
                <SelectItem value="ตาก">ตาก </SelectItem>
                <SelectItem value="นครนายก">นครนายก </SelectItem>
                <SelectItem value="นครปฐม">นครปฐม </SelectItem>
                <SelectItem value="นครพนม">นครพนม </SelectItem>
                <SelectItem value="นครราชสีมา">นครราชสีมา </SelectItem>
                <SelectItem value="นครศรีธรรมราช">นครศรีธรรมราช </SelectItem>
                <SelectItem value="นครสวรรค์">นครสวรรค์ </SelectItem>
                <SelectItem value="นราธิวาส">นราธิวาส </SelectItem>
                <SelectItem value="น่าน">น่าน </SelectItem>
                <SelectItem value="นนทบุรี">นนทบุรี </SelectItem>
                <SelectItem value="บึงกาฬ">บึงกาฬ</SelectItem>
                <SelectItem value="บุรีรัมย์">บุรีรัมย์</SelectItem>
                <SelectItem value="ประจวบคีรีขันธ์">
                  ประจวบคีรีขันธ์{" "}
                </SelectItem>
                <SelectItem value="ปทุมธานี">ปทุมธานี </SelectItem>
                <SelectItem value="ปราจีนบุรี">ปราจีนบุรี </SelectItem>
                <SelectItem value="ปัตตานี">ปัตตานี </SelectItem>
                <SelectItem value="พะเยา">พะเยา </SelectItem>
                <SelectItem value="พระนครศรีอยุธยา">
                  พระนครศรีอยุธยา{" "}
                </SelectItem>
                <SelectItem value="พังงา">พังงา </SelectItem>
                <SelectItem value="พิจิตร">พิจิตร </SelectItem>
                <SelectItem value="พิษณุโลก">พิษณุโลก </SelectItem>
                <SelectItem value="เพชรบุรี">เพชรบุรี </SelectItem>
                <SelectItem value="เพชรบูรณ์">เพชรบูรณ์ </SelectItem>
                <SelectItem value="แพร่">แพร่ </SelectItem>
                <SelectItem value="พัทลุง">พัทลุง </SelectItem>
                <SelectItem value="ภูเก็ต">ภูเก็ต </SelectItem>
                <SelectItem value="มหาสารคาม">มหาสารคาม </SelectItem>
                <SelectItem value="มุกดาหาร">มุกดาหาร </SelectItem>
                <SelectItem value="แม่ฮ่องสอน">แม่ฮ่องสอน </SelectItem>
                <SelectItem value="ยโสธร">ยโสธร </SelectItem>
                <SelectItem value="ยะลา">ยะลา </SelectItem>
                <SelectItem value="ร้อยเอ็ด">ร้อยเอ็ด </SelectItem>
                <SelectItem value="ระนอง">ระนอง </SelectItem>
                <SelectItem value="ระยอง">ระยอง </SelectItem>
                <SelectItem value="ราชบุรี">ราชบุรี</SelectItem>
                <SelectItem value="ลพบุรี">ลพบุรี </SelectItem>
                <SelectItem value="ลำปาง">ลำปาง </SelectItem>
                <SelectItem value="ลำพูน">ลำพูน </SelectItem>
                <SelectItem value="เลย">เลย </SelectItem>
                <SelectItem value="ศรีสะเกษ">ศรีสะเกษ</SelectItem>
                <SelectItem value="สกลนคร">สกลนคร</SelectItem>
                <SelectItem value="สงขลา">สงขลา </SelectItem>
                <SelectItem value="สมุทรสาคร">สมุทรสาคร </SelectItem>
                <SelectItem value="สมุทรปราการ">สมุทรปราการ </SelectItem>
                <SelectItem value="สมุทรสงคราม">สมุทรสงคราม </SelectItem>
                <SelectItem value="สระแก้ว">สระแก้ว </SelectItem>
                <SelectItem value="สระบุรี">สระบุรี </SelectItem>
                <SelectItem value="สิงห์บุรี">สิงห์บุรี </SelectItem>
                <SelectItem value="สุโขทัย">สุโขทัย </SelectItem>
                <SelectItem value="สุพรรณบุรี">สุพรรณบุรี </SelectItem>
                <SelectItem value="สุราษฎร์ธานี">สุราษฎร์ธานี </SelectItem>
                <SelectItem value="สุรินทร์">สุรินทร์ </SelectItem>
                <SelectItem value="สตูล">สตูล </SelectItem>
                <SelectItem value="หนองคาย">หนองคาย </SelectItem>
                <SelectItem value="หนองบัวลำภู">หนองบัวลำภู </SelectItem>
                <SelectItem value="อำนาจเจริญ">อำนาจเจริญ </SelectItem>
                <SelectItem value="อุดรธานี">อุดรธานี </SelectItem>
                <SelectItem value="อุตรดิตถ์">อุตรดิตถ์ </SelectItem>
                <SelectItem value="อุทัยธานี">อุทัยธานี </SelectItem>
                <SelectItem value="อุบลราชธานี">อุบลราชธานี</SelectItem>
                <SelectItem value="อ่างทอง">อ่างทอง </SelectItem>
                <SelectItem value="อื่นๆ">อื่นๆ</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-2 ">
        <div className="pt-3">
          <Input
            className="peer border border-[#8C8C8C] pl-4 py-1 h w-[250px]"
            placeholder="District"
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
          />
        </div>
        <div className="pt-3">
          <Input
            className="peer border border-[#8C8C8C] pl-4 py-1 h w-[250px]"
            placeholder="Sub district"
            value={sub_district}
            onChange={(e) => setSubDistrict(e.target.value)}
          />
        </div>
        <div className="pt-3">
          <Input
            className="peer border border-[#8C8C8C] pl-4 py-1 h w-[182px]"
            placeholder="Postal code"
            value={postal_code}
            onChange={(e) => setPostal_code(e.target.value)}
          />
        </div>
      </div>
      <div className="absolute flex justify-end mt-6 right-3">
        <Button className="rounded-md bg-[#F9BC60] text-[#FFFFFF] px-10 py-2" onClick={submitAddress}>
          Add new address +
        </Button>
      </div>
    </div>
  );
};

export default ShipNewAddComp;
