import React from "react";
import { Shipping } from "@/type"

interface ShippingProps {
  data: Shipping[];
}


function ShippingItem({ shipment }: { shipment: Shipping }) {
  return (
    <div className="border rounded-lg flex flex-row items-start p-5">
      <input
        id="address1"
        className="peer/address1"
        type="radio"
        name="status"
        value={shipment.shipment_id}
      />
      <label
        htmlFor="address1"
        className="peer-checked/address1:border-[#FFA826] peer-checked/address1:bg-[#FFF1DC]&border-2&text-black"
        >
        <br></br>
        <p className="font-bold">{shipment.receiver_name}</p>
        <p>
          {shipment.street_address}
          <br />
          {shipment.district} {shipment.sub_district} {shipment.province} {shipment.postal_code} <br />
          {shipment.receiver_phone}
        </p>
      </label>
    </div>
  );
}
const shipping = ({ data }: ShippingProps ) => {
  return (
      <div className="grid grid-rows-2">
        {data.map((data, index) => (
          <ShippingItem key={index} shipment={data} />
        ))}
      </div>
  );
};

export default shipping;
