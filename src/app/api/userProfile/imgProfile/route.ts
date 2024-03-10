import { NextResponse } from "next/server";
import { fetchUser, updateImgUser } from "@/lib/db/userDB";
import { createSession } from "../../auth/func/getEnrolls";


export async function PUT(request: Request) {
  const data = request.formData();
  const user_img = (await data).get("user_img");
  const user_id = (await data).get("user_id");
  const email = (await data).get("email");
  const username = (await data).get("username");
  const first_name = (await data).get("first_name");
  const last_name = (await data).get("last_name");
  const phone = (await data).get("phone");
  const role = (await data).get("role");
  try {
    console.log("USER_IMAGE:", user_img)
    updateImgUser({user_img, user_id});
    
      const { session, expires } = await createSession({
        user_id: user_id?.toString(),
        email: email?.toString(),
        username: username?.toString(),
        first_name: first_name?.toString(),
        last_name: last_name?.toString(),
        phone: phone?.toString(),
        role: role?.toString(),
        user_img: user_img?.toString(),
      });

    return NextResponse.json({
      message: "✅ Update Image profile success!",
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
