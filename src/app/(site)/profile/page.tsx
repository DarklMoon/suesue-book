import React from "react";
import AddProfile from "@/components/page/ProfileComp";
import { getSession } from "@/app/api/auth/func/getEnrolls";

type Props = {};

const  Profile = async (props: Props) => {
  const session = await getSession();

  return <AddProfile user={session.user}></AddProfile>;
}

export default Profile;