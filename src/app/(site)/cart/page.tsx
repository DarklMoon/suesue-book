import React from "react";
import CartComp from "@/components/page/CartComp";
import { getSession } from "@/app/api/auth/func/getEnrolls";
import { getCart } from "@/lib/db/cartDB";

const Cart = async () => {
  try {
    const session = await getSession();
    if (!session || !session.user || !session.user.user_id) {
      throw new Error("User session or user ID not found.");
    }
    
    const allCart = await getCart({ customer_id: session.user.user_id });

    return <CartComp user={session.user} data={allCart}></CartComp>;
  } catch (error) {
    console.error("Error fetching cart:", error);
    // You may want to render an error component or redirect to handle this error
    return <div>Error fetching cart data.</div>;
  }
};

export default Cart;
