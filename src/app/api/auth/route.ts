import { NextRequest, NextResponse } from "next/server";
import mockUser from "@/lib/mockData.json";
import bcrypt from "bcrypt";
import { login } from "./func/getEnrolls";


export async function POST(request: NextRequest): Promise<any> {
  const data = request.formData();
  const first_name = (await data).get("first_name");
  const last_name = (await data).get("last_name");
  const email = (await data).get("email");
  const username = (await data).get("username");
  const phone = (await data).get("phone");
  let password = (await data).get("password");
  try {
    if (password) {
      if (process.env.BCRYPT_SALT !== undefined) {
        password = bcrypt.hashSync(
          password.toString(),
          parseInt(process.env.BCRYPT_SALT)
        );
      }
      let userData = {
        user_id: "1",
        first_name: first_name,
        last_name: last_name,
        email: email,
        username: username,
        password: password,
        phone: phone,
        role: "normal",
      };
      console.log("userData:", userData);
      return NextResponse.json({
        userData: userData,
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function PUT(request: NextRequest): Promise<any> {
  const data = request.formData();
  const email = (await data).get("email")
  const password = (await data).get("password")
  console.log("Email:", email);
  console.log("Password:", password);
  try {
    const filteredUsers = mockUser.filter(
      (user: { email: string }) => user.email === email
    );

    if (filteredUsers.length > 0) {
      if(password){
        const match = await bcrypt.compare(password.toString(), filteredUsers[0].password);
        if (match) {
          console.log(filteredUsers);
          const { session, expires } = await login({
            user_id: filteredUsers[0].user_id,
            email: filteredUsers[0].email,
            username: filteredUsers[0].username,
            first_name: filteredUsers[0].first_name,
            last_name: filteredUsers[0].last_name,
            phone: filteredUsers[0].phone,
            role: filteredUsers[0].role,
          });

          // console.log("Session&Expires: ", session, expires)
    
          return NextResponse.json({
            DATA_LOGIN: filteredUsers,
            Session: session
          });
      }

    } else {
      console.log("Wrong Email or Password");
      return NextResponse.json({
        message: "Wrong Email or Password",
      });
    }}
    else{
      console.log("User not found");
      return NextResponse.json({
        message: "User not found",
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function GET() {
  try {
    console.log("GET_METHOD")
    return NextResponse.json({
      MOCK_USER: mockUser,
    });

  } catch (error) {
    console.log(error);
    throw error;
  }
}
