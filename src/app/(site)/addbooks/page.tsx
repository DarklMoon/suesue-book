import React from "react";
import AddBooksForm from "@/components/page/AddBooksComp";
import { getSession } from "@/app/api/auth/func/getEnrolls";


const  AddBooks = async () => {

const session = await getSession();
  return <AddBooksForm user={session.user} ></AddBooksForm>;
}

export default AddBooks;