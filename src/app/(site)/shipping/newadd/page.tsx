import React from "react";
import ShipNewAddComp from "@/components/page/ShipNewAddComp";
import { getSession } from "@/app/api/auth/func/getEnrolls";


const  shipping = async () => {
  const session = await getSession();

  return <ShipNewAddComp user={session.user}></ShipNewAddComp>;
}

export default shipping;