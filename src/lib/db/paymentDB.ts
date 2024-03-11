import { float } from "aws-sdk/clients/cloudfront";
import { callProducts } from "../dbConfig";
import { getSession } from "@/app/api/auth/func/getEnrolls";

type Payment = {

    payment_date:string;
    payment_amount: number;
    payment_method: string;
    credit_id: string;
  };

  export async function createPayment(req: { payment_date: string, payment_amount: number, payment_method: string, credit_id:string }): Promise<Payment[]> {
    console.log("Ok");
    const session = await getSession();
    try {

      // Use straight quotes or backticks for the SQL query string
      const response = await callProducts("INSERT INTO PAYMENT (payment_date, payment_amount, payment_method, credit_id) \
      VALUES(?, ?, ?, ?)", [
        req.payment_date, req.payment_amount, req.payment_method, req.credit_id == "" ? "" : req.credit_id
      ]);
      // const data = JSON.stringify(response);

      return response as Payment[];
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch revenue data.");
    }
  }

export async function showPayment(res: { payment_date: string, payment_amount: number, payment_method: string, credit_id:string }): Promise<Payment[]> {
    console.log("ok");
    const session = await getSession();
    try {

      const user_id = JSON.stringify(session.user.id)
      // Use straight quotes or backticks for the SQL query string
      const response = await callProducts("SELECT * FROM PAYMENT WHERE customer_id=?", [
        user_id
      ]);
      // const data = JSON.stringify(response);

      return response as Payment[];
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch revenue data.");
    }
  }

