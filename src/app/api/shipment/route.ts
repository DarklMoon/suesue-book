import { NextRequest, NextResponse } from "next/server";
import { createShipment } from "@/lib/db/shipDB";

export async function POST(request: NextRequest): Promise<any> {
  const data = request.formData();
  const customer_id = (await data).get("customer_id");
  const receiver_name = (await data).get("receiver_name");
  const receiver_phone = (await data).get("receiver_phone");
  const street_address = (await data).get("street_address");
  const province = (await data).get("province");
  const district = (await data).get("district");
  const sub_district = (await data).get("sub_district");
  const postal_code = (await data).get("postal_code");
  try {
    
      let shipData = {
        customer_id: customer_id,
        receiver_name: receiver_name,
        receiver_phone: receiver_phone,
        street_address: street_address,
        province: province,
        district: district,
        sub_district: sub_district,
        postal_code: postal_code
      };

      const result = createShipment(shipData);

      return NextResponse.json({
        shipData: result,
      });
    }catch (error){
        console.log(error)
    }
}