import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/app/api/auth/func/getEnrolls";


export async function POST(request: NextRequest): Promise<any> {
    const data = request.formData();
    const picture = (await data).get("picture");
    const book_name = (await data).get("book_name");
    const author = (await data).get("author");
    const description = (await data).get("description");
    const price = (await data).get("price");
    const category = (await data).get("category");
    try {
      if (picture) {
        console.log("aa")
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
    return NextResponse.json({

      });
  }

export async function PUT(request: NextRequest): Promise<any> {
  const data = request.formData();
  const email = (await data).get("email")
  const password = (await data).get("password")


  // try {

  //   const filteredUsers = mockUser.filter(
  //     (user: { email: string }) => user.email === email
  //   );

  //   if (filteredUsers.length > 0) {
  //     if(password){
  //       const match = await bcrypt.compare(password.toString(), filteredUsers[0].password);
  //       if (match) {
  //         console.log(filteredUsers);
  //         const { session, expires } = await login({
  //           user_id: filteredUsers[0].user_id,
  //           email: filteredUsers[0].email,
  //           username: filteredUsers[0].username,
  //           first_name: filteredUsers[0].first_name,
  //           last_name: filteredUsers[0].last_name,
  //           phone: filteredUsers[0].phone,
  //           role: filteredUsers[0].role,
  //         });

  //         // console.log("Session&Expires: ", session, expires)

  //         return NextResponse.json({
  //           DATA_LOGIN: filteredUsers,
  //           Session: session
  //         });
  //     }

  //   } else {
  //     console.log("Wrong Email or Password");
  //     return NextResponse.json({
  //       message: "Wrong Email or Password",
  //     });
  //   }}
  //   else{
  //     console.log("User not found");
  //     return NextResponse.json({
  //       message: "User not found",
  //     });
  //   }
  // } catch (error) {
  //   console.log(error);
  //   throw error;
  // }


  }

export async function GET(request: NextRequest): Promise<any> {
  try {
    console.log("GET_METHOD")
    return NextResponse.json({
    });

  } catch (error) {
    console.log(error);
    throw error;
  }
  }

export async function DELETE(request: NextRequest): Promise<any> {
    const data = request.formData();
    const picture = (await data).get("picture");
    const book_name = (await data).get("book_name");
    const author = (await data).get("author");
    const description = (await data).get("description");
    try {
      if (picture) {
        console.log("aa")
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
    return NextResponse.json({

      });
  }