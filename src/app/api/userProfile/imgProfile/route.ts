import { NextResponse } from "next/server";
import { fetchUser, updateImgUser } from "@/lib/db/userDB";
import { login } from "../../auth/func/getEnrolls";


export async function PUT(request: Request) {
  const data = request.formData();
  const user_img = (await data).get("user_img");
  const user_id = (await data).get("user_id");
  const email = (await data).get("email");
  try {
    console.log("USER_IMAGE:", user_img)
    updateImgUser({user_img, user_id});
    if (email) {
        const resUser = await fetchUser({email: email.toString()});
        console.log("ReUserData:", resUser)
        if((await resUser).length > 0){
            const { session, expires } = await login({
              user_id: resUser[0].user_id.toString(),
              email: resUser[0].email,
              username: resUser[0].username,
              first_name: resUser[0].first_name,
              last_name: resUser[0].last_name,
              phone: resUser[0].phone,
              role: resUser[0].role,
              user_img: resUser[0].user_img,
            });
    }else{
            throw new Error("Email Not Found");
        }
    }else{
        throw new Error("Email Not Found");
    }
    return NextResponse.json({
      message: "✅ Update Image profile success!",
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
