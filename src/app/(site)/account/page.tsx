import { getSession } from "@/app/api/auth/route";
import React from "react";

const account = async () => {
  const session = await getSession();
  return(

  <div className="h-screen mt-5 p-10">account
    <pre>{JSON.stringify(session.user)}</pre>
  </div>
  );
};

export default account;
