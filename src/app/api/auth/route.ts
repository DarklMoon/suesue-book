import { NextRequest, NextResponse } from "next/server";
import mockUser from "@/lib/mockData.json";
import bcrypt from "bcrypt";
import { createSession, logout } from "./func/getEnrolls";
import { fetchUser, createUser } from "@/lib/db/userDB";


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
        first_name: first_name,
        last_name: last_name,
        email: email,
        username: username,
        password: password,
        phone: phone,
        role: "customer",
      };

      const result = createUser(userData);
      
      return NextResponse.json({
        userData: result,
      });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function PUT(request: NextRequest): Promise<any> {
  const data = request.formData();
  const emailEntry = (await data).get("email");
  const password = (await data).get("password");

  if (!emailEntry) {
    throw new Error("Email is required");
  }

  const email = emailEntry.toString();
  const data_mydb = await fetchUser({ email });

  console.log("Email:", email);
  console.log("Password:", password);
  console.log("GET_DB_USER:", data_mydb);

  try {

    if (data_mydb.length > 0) {
      if(password){
        const match = await bcrypt.compare(password.toString(), data_mydb[0].password);
        if (match) {
          console.log(data_mydb);
          if (data_mydb[0].user_id){
            const { session, expires } = await createSession({
              user_id: data_mydb[0].user_id.toString(),
              email: data_mydb[0].email,
              username: data_mydb[0].username,
              first_name: data_mydb[0].first_name,
              last_name: data_mydb[0].last_name,
              phone: data_mydb[0].phone,
              role: data_mydb[0].role,
              user_img: data_mydb[0].user_img,
            });
          }
    
          return NextResponse.json({
            message: "Login Success"
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

export async function DELETE(){
  try {
    logout()
    return NextResponse.json(
      { message: "Logout Suess" },
      { status: 200 }
    );
  } catch (error) {
    
  }
}
