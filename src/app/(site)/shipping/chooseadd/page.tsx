import React from "react";
import ShipChooseAddComp from "@/components/page/ShipChooseAddComp";
import { getSession } from "@/app/api/auth/func/getEnrolls";
import { getShipment } from "@/lib/db/shipDB";  


const Shipping = async () => {
  try {
    const session = await getSession();
    if (!session || !session.user || !session.user.user_id) {
      throw new Error("User session or user ID not found.");
    }

    const allShip = await getShipment({ customer_id: session.user.user_id });

    return <ShipChooseAddComp data={allShip}></ShipChooseAddComp>;
  } catch (error) {
    console.error("Error fetching Shipping:", error);
    // You may want to render an error component or redirect to handle this error
    return <div>Error fetching Shipping data.</div>;
  }
};

export default Shipping;