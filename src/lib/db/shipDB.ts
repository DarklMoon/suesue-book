import { callProducts } from "../dbConfig";
import { Shipping } from "@/type";

export async function getShipment(req: { customer_id: number }): Promise<Shipping[]> {
  console.log("GetShipDB:", req.customer_id);
  try {
    const response = await callProducts(
      "SELECT * FROM mydb.SHIPMENT WHERE customer_id = ?",
      [req.customer_id]
    );
    // console.log("Response: ", response);
    return response as Shipping[];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}

export async function createShipment(req: any){
  console.log("CreateShipment:", req);
  try {
    // Use straight quotes or backticks for the SQL query string
    const response = await callProducts(
      "INSERT INTO SHIPMENT (receiver_name, receiver_phone, street_address, province, district, sub_district, postal_code, customer_id) \
    VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
      [
        req.receiver_name,
        req.receiver_phone,
        req.street_address,
        req.province,
        req.district,
        req.sub_district,
        req.postal_code,
        req.customer_id,
      ]
    );
    const data = JSON.stringify(response);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch revenue data.");
  }
}