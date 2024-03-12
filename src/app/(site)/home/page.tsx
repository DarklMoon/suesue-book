import React from "react";
import HomeComp from "@/components/page/HomeComp";
import { getSession } from "@/app/api/auth/func/getEnrolls";
import { fetchAllBook } from "@/lib/db/bookDB";

const Home = async () => {
  const session = await getSession();
  const allBook = await fetchAllBook();
  console.log("All-Book-API", allBook);

  return <HomeComp user={session.user} data={allBook}></HomeComp>;
};

export default Home;
